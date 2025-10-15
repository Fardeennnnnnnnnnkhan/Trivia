import { getuserOnBoardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';

const Dashboard =  async () => {
    const {isOnboarded} = await getuserOnBoardingStatus();

    if(!isOnboarded){
      redirect('/onboarding');
    }
  return (
    <div>
      heheh
    </div>
  )
}

export default Dashboard
