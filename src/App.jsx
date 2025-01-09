import Badge from './components/badge'
import Banner from './components/banner'
import Card from './components/card'
import Testimonial from './components/testimonial'

import successIcon from './assets/success.svg'
import mrRobot from './assets/mrrobot.png'
import logo from './assets/logo.svg'
import Tooltip from './components/tooltip'

function App() {
  return (
    <>
      <Badge variant="square" color="indigo">Badge</Badge>
      <Badge variant="square" color="green">Badge</Badge>
      <Badge variant="pill" color="red">Badge</Badge>
      <Badge variant="pill" color="yellow">Badge</Badge>
      <Banner variant="success" header="Congratulations!" isSingleLine={false}>Hi, this is a success message</Banner>
      <Banner variant="error" header="Something went wrong!" isSingleLine={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quisquam eligendi et incidunt distinctio dolorem nam corporis dignissimos inventore, facere quasi? Distinctio laboriosam totam repellendus, omnis mollitia dolores ab iusto.</Banner>
      <Banner variant="warning" header="Attention" isSingleLine={true}></Banner>
      <Banner header="Update available" isSingleLine={true}></Banner>
      <Card header='Easy deployment' text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' />
      <Card header='Easy deployment' color="red" text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' />
      <Card header='Easy deployment' icon={successIcon} text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' />
      <Testimonial img={mrRobot} text='"What If Changing The World Was Just About Being Here, By Showing Up No Matter How Many Times We Get Told We Don’t Belong..."' name="Mr Robot" title="Cyber-Security Engineer" />
      <Testimonial logo={logo} logoText='Workcation' text='"What If Changing The World Was Just About Being Here, By Showing Up No Matter How Many Times We Get Told We Don’t Belong..."' name="Mr Robot" title="Cyber-Security Engineer" />
      <Tooltip header="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." color="green" style="light" />
      <Tooltip header="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." color="magenta" style="dark" />
      <Tooltip header="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." color="black" style="light" />
      <Tooltip header="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." color="blue" style="dark" />
    </>
  );
}

export default App;