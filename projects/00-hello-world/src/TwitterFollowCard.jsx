export function TwitterFollowCard({formatUserName,userName='unknown',name,isFollowing}){
    //Never MODIFY props sent in the call
    //If you want to use big components, send 'children' as a prop
    //If username not specified, use 'unknown' as default value
    const imageSrc = `https://unavatar.io/${userName}`
    return (
        //When adding a new class, we need to call it className
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>



    )


}