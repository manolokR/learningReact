import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        //Instead of using <React.Fragments>, we can just put empty <> because it's cleaner
        //When sending boolean and it's true, you don't need to put ={true}
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing 
            userName="ansufatidico" 
            name= "Rey del trap y los cueros"
            />

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing={false} 
            userName="manurtt8" 
            name= "Manolok"
            />

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing 
            userName="infarruco" 
            name= "infa"
            />

        </section>
       
    )


}