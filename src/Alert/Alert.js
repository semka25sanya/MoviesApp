import { Alert, Space } from 'antd'
import './Alert.css'

function AlertMess() {
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
        >
            <Alert
                message="Error"
                description="Unfortunately no data was received :(
But we are already working on it!"
                type="error"
                showIcon
            />
        </Space>
    )
}

export default AlertMess

// export default function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }
// const AlertMess = (
//     <Space
//         direction="vertical"
//         style={{
//             width: '100%',
//         }}
//     >
//         <Alert message="Error" type="error" showIcon />

//         <Alert message="Error" description="This is an error message about copywriting." type="error" showIcon />
//     </Space>
// )
// export default AlertMess
