import RightSidebar from '../Components/RightSidebar/RightSidebar';
import Content from '../Components/Content/Content';
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar';

const Home = props => {
  const { mobileMenu, toggle } = props
  return (
    <main className='Main-Container' >
      <LeftSidebar burguerMenu={mobileMenu} closeMenu={toggle} />
      <Content />
      <RightSidebar />
    </main >
  )
}
export default Home