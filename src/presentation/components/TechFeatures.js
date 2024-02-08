import { FolderCopyOutlined, FolderZipOutlined, HandshakeOutlined, NoteAddOutlined, PublicOutlined, ScatterPlotOutlined } from '@mui/icons-material'
import DefineCustomNode from '../../images/DefineCustomNodes.png'
import GlobalVar from '../../images/GlobalVar.png'
import NiceLooking from '../../images/NiceLooking.png'
import SaveAsAModel from '../../images/SaveAsAModel.png'


const features = [
    { name: 'Save as models', description: 'You can create custom Python function-nodes and then save them as models, at any time!', icon: <FolderCopyOutlined fontSize='small' /> },
    { name: 'Global Variables', description: 'There is no need to track an edge among all the graph. Just create a global variable!', icon: <PublicOutlined fontSize='small' /> },
    { name: 'Save the configuration', description: 'Want to save your work? Just click save and create your configuration file', icon: <FolderZipOutlined fontSize='small' /> },
    { name: 'Create Custom nodes ', description: 'This is coding, I know... but you can create any custom looking node in a very simple way!', icon: <NoteAddOutlined fontSize='small' /> },
    { name: 'Easy to Use', description: "That's the goal. It was born with the Idea to have a simple tool but with all the power you need", icon: <HandshakeOutlined fontSize='small' /> },
    { name: 'Scalable', description: 'This is just the skeleton! Build your app on it!', icon: <ScatterPlotOutlined fontSize='small' /> },
]

export default function TechFeatures() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  gap-x-8 gap-y-16 px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comes With More!</h2>
                    <p className="mt-4 text-gray-500">
                        VisualCoding is not just a nice looking software...
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <div className='flex items-center'>{feature.icon}<dt className="pl-2 font-medium text-gray-900">{feature.name}</dt></div>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src={NiceLooking}
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src={GlobalVar}
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src={SaveAsAModel}
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src={DefineCustomNode}
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    )
}