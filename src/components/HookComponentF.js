import React, { useContext } from 'react'
import {UserContext, ChannelContext} from "../App"

function HookComponentF() {
    const user= useContext(UserContext);
    const channel = useContext(ChannelContext);
  return (
    <div>
        {/* single props */}
        <UserContext>
            {
                user=>{
                    return <h3>UserName= {user}</h3>
                }
            }
        </UserContext>

        {/* multiple props */}
        {/* too much nesting */}
        <UserContext.Consumer>
            {
                user=>{
                    return(
                    <ChannelContext.Consumer>
                        {
                            channel=>{
                                return <h2>UserName= {user}({channel})</h2>
                            }
                        }
                    </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
        
        {/* no nesting */}
        <div>
            <h1>UserName= {user}({channel})</h1>
        </div>

    </div>
  )
}

export default HookComponentF