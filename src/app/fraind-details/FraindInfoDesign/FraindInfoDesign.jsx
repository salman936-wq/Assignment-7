'use client'
import React, { useContext } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMessage, faVideo, faBell, faBoxArchive, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Context } from '@/provider/ContextProvider';



const FraindInfoDesign = ({ friend }) => {
    const {handleCall, handleText, handleVideo} = useContext(Context)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Left: Profile card */}
            <div className="flex flex-col gap-3">
                <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center gap-2">
                    <Image className="rounded-full"
                        src={`${friend.picture}`}
                        alt={friend.name}
                        width={80}
                        height={80}
                    />
                    <p className="font-bold text-gray-900 text-lg">{friend.name}</p>
                    <div className="flex gap-2 flex-wrap justify-center">

                        <span
                            className={` text-white text-xs font-semibold px-3 py-0.5 rounded-full 
                  ${friend.status == "On-Track" && "bg-[#244D3F]"} 
                  ${friend.status == "Overdue" && "bg-[#EF4444]"} 
                  ${friend.status == "Almost Due" && "bg-[#EFAD44]"}`}>
                            {friend.status}
                        </span>

                        {friend.tags.map((t) => (
                            <span key={t} className="bg-green-100 text-green-700 first-letter:uppercase text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm italic">{friend.bio}</p>
                    <p className="text-gray-400 text-xs cursor-pointer">{friend.email}</p>
                </div>

                <button className="bg-white cursor-pointer rounded-xl px-4 py-3 flex items-center gap-2 text-sm hover:bg-gray-50 transition-colors w-full text-black">
                    <FontAwesomeIcon className="h-5 w-5" icon={faBell} />
                    <span>Snooze 2 Weeks</span>
                </button>
                <button className="bg-white cursor-pointer rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-black hover:bg-gray-50 transition-colors w-full">
                    <FontAwesomeIcon className="h-5 w-5" icon={faBoxArchive} />
                    <span>Archive</span>
                </button>
                <button className="bg-white cursor-pointer rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-red-500 hover:bg-gray-50 transition-colors w-full font-bold">
                    <FontAwesomeIcon className="h-5 w-5" icon={faTrash} />
                    <span>Delete</span>
                </button>
            </div>

            {/* Right: Stats + Goal + Quick Check-in */}
            <div className="md:col-span-2 flex flex-col gap-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-5 text-center">
                        <p className="text-3xl font-bold text-gray-900">{friend.days_since_contact}</p>
                        <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 text-center">
                        <p className="text-3xl font-bold text-gray-900">{friend.goal}</p>
                        <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 text-center">
                        <p className="text-xl font-bold text-[#1e3a2f]">
                            {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            })}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Next Due</p>
                    </div>
                </div>

                {/* Relationship Goal */}
                <div className="bg-white rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">Relationship Goal</p>
                        <button className="border cursor-pointer border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-md hover:bg-gray-50 transition-colors">
                            Edit
                        </button>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Connect every <strong>{friend.goal} days</strong>
                    </p>
                </div>

                {/* Quick Check-In */}
                <div className="bg-white rounded-xl p-5">
                    <p className="font-semibold text-gray-900 mb-3">Quick Check-In</p>

                    <div className="grid grid-cols-3 gap-3">

                        <button onClick={() => handleCall(friend)} className="border border-gray-200 cursor-pointer rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors">
                            <FontAwesomeIcon className="text-black h-5 w-5" icon={faPhone} />
                            <span className="text-sm text-gray-700">Call</span>
                        </button>

                        <button onClick={() => handleText(friend)} className="border border-gray-200 cursor-pointer rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors">
                            <FontAwesomeIcon className="text-black h-5 w-5" icon={faMessage} />
                            <span className="text-sm text-gray-700">Text</span>
                        </button>
                        <button onClick={() => handleVideo(friend)} className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
                            <FontAwesomeIcon className="text-black h-5 w-5" icon={faVideo} />
                            <span className="text-sm text-gray-700">Video</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FraindInfoDesign;