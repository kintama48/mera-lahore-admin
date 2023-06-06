import { Spin } from 'antd'

const Spinner = ({ size = 'default', spinning = true }) => {
    return (
        <div className="flex w-full h-full mt-[25%] items-center justify-center">
            <Spin size={size} spinning={spinning} />
        </div>
    )
}

export default Spinner
