
import MenuItem from '../menuItem/menuItem.component';
import './directory.styles.scss';



const sections = [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id:1
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackcets.png',
        id:2
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3
    },
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        id:4
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        id:5
    }

]

function Directory() {
    
    return (
        <div className="directory-menu">
            {sections.map(({title,imageUrl,id}) => {
                return <MenuItem  key={id} title={title} imgUrl={imageUrl} />
            })}
        </div>
    )
}


export default Directory
