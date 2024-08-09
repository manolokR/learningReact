import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

//We need to know how to render lists of elements

const users = [
    {
        userName: 'ansufatidico',
        name: 'Rey del trap',
        isFollowing: true
    },
    {
        userName: 'manurtt8',
        name: 'Manolok',
        isFollowing: false
    },
    {
        userName: 'infarruco',
        name: 'infa',
        isFollowing: true
    },
    {
        userName: 'mbapadre',
        name: 'gam',
        isFollowing: false
    }


]




export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        //Instead of using <React.Fragments>, we can just put empty <> because it's cleaner
        //When sending boolean and it's true, you don't need to put ={true}
        //V2.0 We skip sending isFollowing as a prop because we want to use it as a State (introduction to Hooks)
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            formatUserName={formatUserName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            name={name}
                            key={userName} //Best option for keys are database IDs
                        >

                        </TwitterFollowCard>
                    )
                })
            }
        </section>

    )


}