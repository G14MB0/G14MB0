import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AppContext } from '../../../../provider/appProvider';
import SimpleEditor from '../../../editor/SimpleEditor';


const keyPlaceholder = '${key}';

const initialPythonCode = `def FunctionDemuxer(data=None):
    print(data)
    try:
        if isinstance(data, dict):
            return data["${keyPlaceholder}"]
        elif isinstance(data, list) or isinstance(data, tuple):
            return data[${keyPlaceholder}]
        else: return -1
    except:
        print(traceback.print_exc())`;


export default memo(({ data, isConnectable, updateNodeData }) => {

    const { setOverlayComponent, setOverlay, setSave, save, isDebug } = useContext(AppContext)
    const [replacementKey, setReplacementKey] = useState(data.replacementKey);

    const handleOpenEditor = (e) => {
        e.preventDefault();
        setOverlayComponent({
            Component: SimpleEditor,
            props: { code: replacementKey, setCode: setReplacementKey, onSave: handleSave }
        })
        setOverlay(true)
    }

    const handleSave = (e) => {
        e.preventDefault()
        setSave(!save)
    }


    // Call updateNodeData whenever selected changes
    useEffect(() => {
        const finalPythonCode = initialPythonCode.replaceAll(keyPlaceholder, replacementKey);
        console.log(finalPythonCode)
        if (updateNodeData) {
            updateNodeData(data.id, { ...data, code: finalPythonCode, replacementKey: replacementKey });

        }
    }, [updateNodeData, data.id, replacementKey]);


    // // Call updateNodeData whenever selected changes
    // useEffect(() => {
    //     if (updateNodeData) {
    //         updateNodeData(data.id, { ...data, code: code });

    //     }
    // }, [updateNodeData, data.id, code]);


    return (


        <div className='nodeFree  min-w-48 drag_Handle flex flex-col justify-around items-center' title='Pick a value from a list (by index) or dictionary (by key name)'>
            <Handle
                type="target"
                position={Position.Left}
                id='a'
                isConnectable={isConnectable}
            />
            <div className='flex justify-between items-center mb-2 w-full'>
                <div className='font-mono text-xs mb-2 pr-2'>
                    Demuxer Node
                </div>
                <div className='font-mono text-xs mb-2 cursor-pointer text-end' onClick={handleOpenEditor}>
                    Open Editor
                </div>
            </div>
            <pre className='bg-indigo-50 px-2 leading-3 py-2 w-full'><code className='font-mono text-xs font-[50]'>{replacementKey}</code></pre>
            <div className={`${isDebug ? "mt-4 w-full" : ""}`}>
                {isDebug ?
                    (<pre className='bg-indigo-50 px-2 leading-3 py-2 w-full'><code className='font-mono text-xs font-[50]'>{data.value && JSON.stringify(data.value, null, 2) && JSON.stringify(data.value, null, 2).replace(/\\n/g, '\n')}</code></pre>)
                    :
                    ""}
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                isConnectable={isConnectable}
            />
        </ div>
    );
});