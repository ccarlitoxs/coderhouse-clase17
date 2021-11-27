import parseArgs from 'minimist'
import {argv} from 'process'

const options = {
    alias:{
        p:'port',
        m:'modo'
    },

    default:{
        port:9090,
        modo:'fork'
    }
}

export const {port, modo} = parseArgs(argv, options)