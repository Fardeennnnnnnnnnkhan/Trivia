import { industries } from '@/data/industries'
import OnBoardingForm from "@/app/(main)/onboarding/_components/onBoardingForm"
import { getuserOnBoardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation';
const onBoardingPage = async () => {
  const {isonBoarded} = await getuserOnBoardingStatus();
  if(isonBoarded){
    redirect('/dashboard');
  }
  return (
    <main className=' mx-auto'>
    <OnBoardingForm industries = {industries}/>
    </main>
  )
}

export default onBoardingPage
