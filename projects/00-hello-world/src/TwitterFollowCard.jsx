import { useState } from "react" //Needed for adding funcitonality to components

export function TwitterFollowCard({formatUserName,userName='unknown',name,initialIsFollowing}) {
    //Never MODIFY props sent in the call
    //If you want to use big components, send 'children' as a prop
    //If username not specified, use 'unknown' as default value

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) 

    /* Same expression as above but longer
    const state = useState(false) //State default value is false, array returned
    const isFollowing = state[0] //First value of the state is the value
    const setIsFollowing = state[1] //Second value of the state is the function to change the value

    */

    const handleClick = () => {

        setIsFollowing(!isFollowing)

    }
   
    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button'

    //All elements are rendered even if the state change doesn't affect them (we can optimize this)

    //When adding a new class, we need to call it className
    return (
        
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de ansufatidico"
                    src= {imageSrc}/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>


            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
            </aside>
        </article>



    )


}