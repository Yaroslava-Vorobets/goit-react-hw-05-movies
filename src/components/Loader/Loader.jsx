import { Vortex } from 'react-loader-spinner'
import { Wrap } from './Loader'

export const Loader = () => {
    return (
        <Wrap>
             <Vortex ariaLabel="vortex-loading" />
        </Wrap>
    )
}