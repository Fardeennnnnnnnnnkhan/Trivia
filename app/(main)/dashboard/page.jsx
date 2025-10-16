import { generateIndustryInsight } from '@/actions/dashboard';
import { getuserOnBoardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import DashBoardView from './_components/DashBoardView';

const Dashboard =  async () => {
    const {isOnboarded} = await getuserOnBoardingStatus();
    const insights = await generateIndustryInsight();
    
    if(!isOnboarded){
      redirect('/onboarding');
    }
  return (
    <div>
      <DashBoardView insights = {insights} />
    </div>
  )
}

export default Dashboard
