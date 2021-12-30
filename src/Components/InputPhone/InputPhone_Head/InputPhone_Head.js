import './InputPhone_Head.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Link} from 'react-router-dom'

const InputPhone_Head = () => {
    return(
        <div className={'InputPhone_Head'}>
            <div>
                <Link to={'/'}>
                    <KeyboardBackspaceIcon/>
                </Link>
            </div>
            <div>
                <RotateLeftIcon/>
            </div>
        </div>
    )
}

export default InputPhone_Head