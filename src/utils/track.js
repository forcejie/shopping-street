import Vue from 'vue'
import { eventLog } from '@/api/bpl/event'

// 埋点指令
let track = Vue.directive('track', {
    bind: (el, binding, vnode) => {
        el.addEventListener('click', () => {
            const data = binding.value;

            // request API
            console.log(data);
            eventLog(data).then(response => {
                console.debug(response.data);
            });

        }, false);
    }
})

export default track
