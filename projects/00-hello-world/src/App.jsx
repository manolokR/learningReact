import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        //Instead of using <React.Fragments>, we can just put empty <> because it's cleaner
        //When sending boolean and it's true, you don't need to put ={true}
        //V2.0 We skip sending isFollowing as a prop because we want to use it as a State (introduction to Hooks)
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="ansufatidico" 
            name= "Rey del trap y los cueros"
            />

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="manurtt8" 
            name= "Manolok"
            />

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="infarruco" 
            name= "infa"
            />

        </section>
       
    )


}