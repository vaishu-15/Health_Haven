import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    function Item(props) {
        return (
            <Paper>
                <div className='banner-container'>
                    <img src={props.item.img} alt="" />
                    <div className='banner-text tracking-in-expand'>
                        <Typography component="h4" variant="h5">
                            {props.item.name}
                        </Typography>
                        <Typography component="p">
                            {props.item.description}
                        </Typography>

                        <HashLink smooth to="/appointment#appointment" className='text-style'>
                            <Button sx={{ mt: 2 }} variant="contained" className="CheckButton">
                                Make an Appointment
                                <AddCircleIcon />
                            </Button>
                        </HashLink>
                    </div>
                </div>

            </Paper>
        )
    }
    const items = [
      {
        name: "You are just one click away from your healthy life",
        description: "Probably the most random thing you have ever seen!",
        img: "https://content.jdmagicbox.com/comp/bangalore/g3/080pxx80.xx80.220405120836.d1g3/catalogue/pragathi-multi-speciality-hospital-konanakunte-cross-bangalore-hospitals-9ba1xkgwa1.jpg",
      },
      {
        name: "Consult with experts Online 24/7",
        description:
          "Get Online support from oue expert Doctor 24/7 and lead a healthy life",
        img: "https://t3.ftcdn.net/jpg/02/96/74/64/360_F_296746476_F0wDElEXSb0Rd1tyDnsCBLVBHGAsJm3O.jpg",
      },
      {
        name: "Check Your Health Condition Regularly",
        description:
          "Upto date with your health condition prevention is always better than cure",
        img: "https://media.licdn.com/dms/image/C5112AQGWk8JmyngUBA/article-cover_image-shrink_720_1280/0/1550820421196?e=2147483647&v=beta&t=Vtw5g45AbAkY5UG0b99cCTK1QqwzwlDWE6apHBnVDbw",
      },
    ];
    return (
        <div>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default Banner;