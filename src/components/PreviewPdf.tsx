import React, { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { toolbarPlugin, ToolbarSlot, TransformToolbarSlot, ToolbarProps } from '@react-pdf-viewer/toolbar';

interface IpreviewPdf {
    file : File
}
const PreviewPdf: React.FC<IpreviewPdf> = ({ file }): JSX.Element => {
    const [viewPdf, setViewPdf] = useState<string | null>(null);

    const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar } = toolbarPluginInstance;

    const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
        ...slot,
        Open: () => <></>,
        OpenMenuItem: () => <></>,
        EnterFullScreen: () => <></>,
        EnterFullScreenMenuItem: () => <></>,
        SwitchTheme: () => <></>,
        SwitchThemeMenuItem: () => <></>,
    });

    const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
        <>
            <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
        </>
    );

    const newPlugins = defaultLayoutPlugin({
        renderToolbar,
        sidebarTabs: () => [],
    });

    useEffect(() => {
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setViewPdf(fileUrl);

            // Cleanup the URL when the component unmounts or the file changes
            return () => {
                URL.revokeObjectURL(fileUrl);
            };
        }
    }, [file]);

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {
                viewPdf && <>
                    <Viewer fileUrl={viewPdf} plugins={[newPlugins]} theme='dark' />
                </>
            }
        </Worker>
    )
}

export default PreviewPdf;
