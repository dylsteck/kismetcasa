import sdk from "@farcaster/frame-sdk";
import React from "react";

function FrameLink({
    identifier,
    type,
    children
}: {
    identifier: string,
    type: 'url' | 'profile',
    children: React.ReactNode
}){

    const handleOnClick = async() => {
        const context = await sdk.context;
        if(context !== undefined){
            switch(type){
                case 'url':
                    await sdk.actions.openUrl(identifier);
                    break;
                case 'profile':
                    await sdk.actions.viewProfile({ fid: parseInt(identifier) })
                default:
                    break;
            }
        } else{
            switch(type){
                case 'url':
                    window.open(identifier, '_blank')
                    break;
                case 'profile':
                    window.open(`https://warpcast.com/~/profiles/${identifier}`)
                    await sdk.actions.viewProfile({ fid: parseInt(identifier) })
                default:
                    break;
            }
        }
    }
    return(
        <div className="w-auto cursor-pointer hover:text-blue-800" onClick={() => handleOnClick()}>
            {children}
        </div>
    )
}

export { FrameLink };