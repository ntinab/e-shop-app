import { Typography } from 'antd' 

function Footer() {
       return <div className='Footer'>
              <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
              <Typography.Link href='https://www.google.com' target={'_blank'}>Privacy Policy</Typography.Link>
              <Typography.Link href='https://www.google.com' target={'_blank'}>Terms of Use</Typography.Link>
       </div>
}

export default Footer;