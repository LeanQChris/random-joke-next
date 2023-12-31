import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
    return (
        <div>
            <div className='flex min-h-screen items-center justify-center min-h-screen px-5 lg:px-24'>
                <div>
                    <div className="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
                        <a className="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" className="pointer-events-none h-3.5 w-3.5 rounded-lg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
                            </svg>
                        </a>
                        <h2 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug !mb-2 text-primary">Random Generators</h2>
                    </div>
                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit !mb-4 !font-normal !text-gray-600">Generate random contents of the following categories</p>
                    <div className="mt-8 grid grid-cols-2 gap-6 " id="frameworks-integration">
                        <Link href="/dog" className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" >
                            <span className="my-6 grid h-24 w-24 place-items-center">
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 490.579 490.579"
                                    xmlSpace="preserve"
                                >
                                    <g id="XMLID_829_">
                                        <g id="XMLID_1033_">
                                            <rect
                                                x={153.919}
                                                y={321.884}
                                                style={{
                                                    fill: "#BE1622",
                                                }}
                                                width={153.358}
                                                height={30.672}
                                            />
                                        </g>
                                        <g id="XMLID_1031_">
                                            <rect
                                                x={153.919}
                                                y={352.556}
                                                style={{
                                                    fill: "#CA9E67",
                                                }}
                                                width={153.358}
                                                height={138.022}
                                            />
                                        </g>
                                        <g id="XMLID_1035_">
                                            <polygon
                                                style={{
                                                    fill: "#D8737A",
                                                }}
                                                points="261.27,390.895 230.599,406.231 199.926,390.895 199.926,306.548 261.27,306.548  "
                                            />
                                        </g>
                                        <g id="XMLID_828_">
                                            <polygon
                                                style={{
                                                    fill: "#E5A2A7",
                                                }}
                                                points="230.599,406.231 230.599,406.231 199.926,390.895 199.926,306.548 230.599,306.548  "
                                            />
                                        </g>
                                        <g id="XMLID_1034_">
                                            <path
                                                style={{
                                                    fill: "#D5B185",
                                                }}
                                                d="M184.591,490.578c0-25.409,20.598-46.007,46.007-46.007c25.409,0,46.007,20.598,46.007,46.007"
                                            />
                                        </g>
                                        <g id="XMLID_1026_">
                                            <path
                                                style={{
                                                    fill: "#7D5D33",
                                                }}
                                                d="M77.24,260.541L77.24,260.541V68.843c0-33.879,27.464-61.343,61.343-61.343l0,0v191.698 C138.583,233.077,111.119,260.541,77.24,260.541z"
                                            />
                                        </g>
                                        <g id="XMLID_1032_">
                                            <path
                                                style={{
                                                    fill: "#7D5D33",
                                                }}
                                                d="M383.956,260.541L383.956,260.541V68.843c0-33.879-27.464-61.343-61.343-61.343l0,0v191.698 C322.613,233.077,350.077,260.541,383.956,260.541z"
                                            />
                                        </g>
                                        <g id="XMLID_1003_">
                                            <path
                                                style={{
                                                    fill: "#CA9E67",
                                                }}
                                                d="M230.599,314.216L230.599,314.216c-42.349,0-76.679-34.33-76.679-76.679V7.5h153.358v230.037 C307.277,279.886,272.947,314.216,230.599,314.216z"
                                            />
                                        </g>
                                        <g id="XMLID_1029_">
                                            <path
                                                style={{
                                                    fill: "#D5B185",
                                                }}
                                                d="M307.279,162.37c-6.768,3.915-14.625,6.156-23.006,6.156c-25.409,0-46.007-20.598-46.007-46.007 s20.598-46.007,46.007-46.007c8.387,0,16.25,2.244,23.021,6.165"
                                            />
                                        </g>
                                        <g id="XMLID_1030_">
                                            <path
                                                style={{
                                                    fill: "#D5B185",
                                                }}
                                                d="M153.935,162.37c6.768,3.915,14.625,6.156,23.006,6.156c25.409,0,46.007-20.598,46.007-46.007 s-20.598-46.007-46.007-46.007c-8.387,0-16.25,2.244-23.021,6.165"
                                            />
                                        </g>
                                        <g id="XMLID_1028_">
                                            <path
                                                style={{
                                                    fill: "#D5B185",
                                                }}
                                                d="M268.938,298.88c0-21.174-17.165-38.34-38.339-38.34c-21.174,0-38.339,17.165-38.339,38.34 l30.672,15.336h15.336L268.938,298.88z"
                                            />
                                        </g>
                                        <g id="XMLID_239_">
                                            <path
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                d="M75.95,268.041h-7.5V62.465C68.45,28.021,96.472,0,130.915,0h7.5v205.576 C138.415,240.02,110.394,268.041,75.95,268.041z M123.415,15.592C100.793,19.197,83.45,38.844,83.45,62.465v189.984 c22.622-3.605,39.965-23.252,39.965-46.873C123.415,205.576,123.415,15.592,123.415,15.592z"
                                            />
                                        </g>
                                        <g id="XMLID_243_">
                                            <path
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                d="M391.456,268.041h-7.5c-34.443,0-62.465-28.021-62.465-62.465V0h7.5 c34.443,0,62.465,28.021,62.465,62.465V268.041z M336.491,15.592v189.984c0,23.621,17.343,43.268,39.965,46.873V62.465 C376.456,38.844,359.113,19.197,336.491,15.592z"
                                            />
                                        </g>
                                        <g>
                                            <path
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                d="M146.419,0v237.537c0,46.417,37.763,84.179,84.18,84.179c46.416,0,84.179-37.763,84.179-84.179V0 H146.419z M299.777,237.537c0,35.611-27.049,65.015-61.68,68.766v-38.262h15.504v-15h-46.007v15h15.503v38.262 c-34.63-3.751-61.679-33.155-61.679-68.766V15h138.358v222.537H299.777z"
                                            />
                                            <rect
                                                x={176.923}
                                                y={115.019}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={38.34}
                                                height={15}
                                            />
                                            <rect
                                                x={245.935}
                                                y={115.019}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={38.34}
                                                height={15}
                                            />
                                            <rect
                                                x={192.259}
                                                y={128.355}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={15.336}
                                                height={17}
                                            />
                                            <rect
                                                x={253.603}
                                                y={128.355}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={15.336}
                                                height={17}
                                            />
                                        </g>
                                        <g id="XMLID_248_">
                                            <path
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                d="M230.599,413.731c-21.048,0-38.171-17.123-38.171-38.171v-53.675h15v53.675 c0,12.777,10.395,23.171,23.171,23.171c12.777,0,23.172-10.395,23.172-23.171v-53.675h15v53.675 C268.77,396.608,251.646,413.731,230.599,413.731z"
                                            />
                                        </g>
                                        <g id="XMLID_249_">
                                            <rect
                                                x={223.099}
                                                y={329.552}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={15}
                                                height={38.339}
                                            />
                                        </g>
                                        <g id="XMLID_251_">
                                            <polygon
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                points="184.591,360.056 146.419,360.056 146.419,314.384 184.591,314.384 184.591,329.384  161.419,329.384 161.419,345.056 184.591,345.056  "
                                            />
                                        </g>
                                        <g id="XMLID_242_">
                                            <polygon
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                points="314.777,360.056 276.605,360.056 276.605,345.056 299.777,345.056 299.777,329.384  276.605,329.384 276.605,314.384 314.777,314.384  "
                                            />
                                        </g>
                                        <g id="XMLID_252_">
                                            <rect
                                                x={146.419}
                                                y={367.892}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={15}
                                                height={122.687}
                                            />
                                        </g>
                                        <g id="XMLID_253_">
                                            <rect
                                                x={299.777}
                                                y={367.892}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={15}
                                                height={122.687}
                                            />
                                        </g>
                                        <g id="XMLID_254_">
                                            <rect
                                                x={246.103}
                                                y={467.574}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={15}
                                                height={23.004}
                                            />
                                        </g>
                                        <g id="XMLID_255_">
                                            <rect
                                                x={200.095}
                                                y={467.574}
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                width={15}
                                                height={23.004}
                                            />
                                        </g>
                                        <g id="XMLID_256_">
                                            <path
                                                style={{
                                                    fill: "#1D1D1B",
                                                }}
                                                d="M345.449,490.578h-15v-107.35c0-25.276,20.563-45.839,45.839-45.839s45.84,20.563,45.84,45.839h-15 c0-17.005-13.835-30.839-30.84-30.839s-30.839,13.834-30.839,30.839V490.578z"
                                            />
                                        </g>
                                    </g>
                                </svg>    </span>
                        </Link>
                        <Link href="/jokes" className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" >
                            <span className="my-6 grid h-24 w-24 place-items-center">
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    style={{
                                    }}
                                    xmlSpace="preserve"
                                >
                                    <path
                                        style={{
                                            fill: "#E7ECED",
                                        }}
                                        d="M256,347.621c42.792,0,79.441,26.301,94.747,63.488c-25.977,21.019-58.961,33.523-94.747,33.523 s-68.662-12.504-94.639-33.523C176.559,373.922,213.208,347.621,256,347.621z"
                                    />
                                    <path
                                        style={{
                                            fill: "#F4661E",
                                        }}
                                        d="M105.095,293.726h301.811c0,47.427-21.881,89.789-56.158,117.383 c-15.306-37.187-51.955-63.488-94.747-63.488s-79.441,26.301-94.639,63.488C127.084,383.623,105.095,341.261,105.095,293.726z"
                                    />
                                    <path
                                        style={{
                                            fill: "#FFD248",
                                        }}
                                        d="M350.747,411.109c34.277-27.594,56.158-69.955,56.158-117.383H105.095 c0,47.535,21.989,89.896,56.266,117.383c25.977,21.019,58.853,33.523,94.639,33.523S324.77,432.128,350.747,411.109z M256,8.084 c136.893,0,247.916,111.023,247.916,247.916S392.893,503.916,256,503.916S8.084,392.893,8.084,256S119.107,8.084,256,8.084z"
                                    />
                                    <path d="M256,0C114.841,0,0,114.841,0,256s114.841,256,256,256s256-114.841,256-256S397.159,0,256,0z M256,495.832 C123.756,495.832,16.168,388.244,16.168,256S123.756,16.168,256,16.168S495.832,123.756,495.832,256S388.244,495.832,256,495.832z" />
                                    <path d="M169.768,150.905c16.344,0,29.642,13.298,29.642,29.642h16.168c0-25.26-20.55-45.811-45.811-45.811 s-45.811,20.55-45.811,45.811h16.168C140.126,164.203,153.424,150.905,169.768,150.905z" />
                                    <path d="M342.232,150.905c16.344,0,29.642,13.298,29.642,29.642h16.168c0-25.26-20.55-45.811-45.811-45.811 s-45.811,20.55-45.811,45.811h16.168C312.589,164.203,325.887,150.905,342.232,150.905z" />
                                    <path d="M97.011,293.726c0,48.388,21.607,93.467,59.285,123.684c28.553,23.096,63.032,35.305,99.704,35.305 c36.226,0,71.681-12.545,99.817-35.31c37.604-30.274,59.172-75.353,59.172-123.68v-8.084H97.011V293.726z M171.337,408.616 c15.686-32.33,48.277-52.911,84.663-52.911c36.344,0,68.972,20.579,84.755,52.913c-24.433,18.05-54.289,27.929-84.755,27.929 C225.129,436.547,195.989,426.911,171.337,408.616z M398.596,301.811c-2.056,36.876-18.134,71.125-45.099,96.219 c-19.086-35.857-56.246-58.493-97.497-58.493c-41.297,0-78.423,22.636-97.416,58.495c-27.011-25.046-43.122-59.3-45.181-96.221 H398.596z" />
                                </svg>
                            </span>
                        </Link>
                        <Link href="/memes" className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" >
                            <span className="my-6 grid h-24 w-24 place-items-center">
                                <svg
                                    width="60px"
                                    height="60px"
                                    viewBox="0 0 60 60"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect fill="#fff" height={60} rx={10} width={60} />
                                    <path
                                        d="M30,6.91,10,18.45v4L30,34l12-6.93V37.26L30,44.19,17.72,37.1,10,41.55,30,53.09l12-6.92,8-4.62V18.45Zm0,17.278-7.091-4.094L30,16l7.091,4.094Z"
                                        fill="#f1f3f4"
                                    />
                                    <path
                                        d="M30,54.59a1.5,1.5,0,0,1-.75-.2l-20-11.54a1.5,1.5,0,0,1,0-2.6L16.97,35.8a1.5,1.5,0,0,1,1.5,0L30,42.458l10.5-6.064V29.668L30.75,35.3a1.5,1.5,0,0,1-1.5,0l-20-11.55a1.5,1.5,0,0,1-.75-1.3v-4a1.5,1.5,0,0,1,.75-1.3l20-11.54a1.5,1.5,0,0,1,1.5,0l20,11.54a1.5,1.5,0,0,1,.75,1.3v23.1a1.5,1.5,0,0,1-.75,1.3l-20,11.54A1.5,1.5,0,0,1,30,54.59ZM13,41.55l17,9.808L48.5,40.684V19.316L30,8.642,11.5,19.316v2.268L30,32.268l11.25-6.5a1.5,1.5,0,0,1,2.25,1.3V37.26a1.5,1.5,0,0,1-.75,1.3l-12,6.93a1.5,1.5,0,0,1-1.5,0L17.719,38.83ZM30,25.688a1.5,1.5,0,0,1-.75-.2l-7.091-4.094a1.5,1.5,0,0,1,0-2.6L29.25,14.7a1.5,1.5,0,0,1,1.5,0L37.841,18.8a1.5,1.5,0,0,1,0,2.6L30.75,25.487A1.5,1.5,0,0,1,30,25.688Zm-4.091-5.594L30,22.456l4.091-2.362L30,17.732Z"
                                        fill="#7f778c"
                                    />
                                    <path
                                        d="M50,19.951a1.5,1.5,0,0,1-.749-.2L30,8.642,10.75,19.75a1.5,1.5,0,0,1-1.5-2.6l20-11.54a1.5,1.5,0,0,1,1.5,0l20,11.54a1.5,1.5,0,0,1-.751,2.8Z"
                                        fill="#aaadbf"
                                    />
                                </svg>
                            </span>
                        </Link>
                        <Link href="/anime" className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" >
                            <span className="my-6 grid h-24 w-24 place-items-center">
                              <Image src="https://animechan.xyz/_next/image?url=%2Flogo.png&w=256&q=75" width={200} height={200} alt="animechan"/>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
