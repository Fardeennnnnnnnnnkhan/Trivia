import { generateIndustryInsight } from '@/actions/dashboard';
import { getuserOnBoardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import DashBoardView from './_components/DashBoardView';

const Dashboard =  async () => {
    const {isOnboarded} = await getuserOnBoardingStatus();
    
    if(!isOnboarded){
      redirect('/onboarding');
    }
    const insights = await generateIndustryInsight();
  return (
    <div>
      <DashBoardView insights = {insights} />
    </div>
  )
}

export default Dashboard
