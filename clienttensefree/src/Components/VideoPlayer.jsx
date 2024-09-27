import React from 'react'
import Options from './Options'
import { SocketContext } from '../SocketContext'

function VideoPlayer() {
  return (
    <div>

        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div class="absolute inset-px rounded-lg bg-white opacity-20"></div>
                <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                    <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Video Person 1</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
                    </div>
                    <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                        <img class="h-[min(152px,40cqw)] object-cover object-center" src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt=""/>
                    </div>
                </div>
            <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                <Options className = "mx-auto"/>
        </div>

        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div class="absolute inset-px rounded-lg bg-white opacity-20"></div>
                <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                    <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Video Person 1</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
                    </div>
                    <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                        <img class="h-[min(152px,40cqw)] object-cover object-center" src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt=""/>
                    </div>
            </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                <Options className = "mx-auto"/>
        </div>

</div>
  )
}

export default VideoPlayer
