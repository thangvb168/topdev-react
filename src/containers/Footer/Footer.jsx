import React from 'react';
import Container from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
  faTelegram,
  faTiktok,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer id="footer-containe" className="mb-16">
      <Container>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-6">
          <div className="col-span-1 flex flex-col items-start gap-4 md:col-span-2">
            <img
              src="https://c.topdevvn.com/v4/assets/images/td-logo.png"
              alt="Logo"
              className="h-10 object-cover"
            />
            <div className="flex flex-col items-start gap-3">
              <p className="small-headline">
                Tầng 12A, Toà nhà AP Tower, 518B Điện Biên Phủ, Phường 21, Quận
                Bình Thạnh, Thành phố Hồ Chí Minh
              </p>
              <p className="small-headline">
                Copyright © CÔNG TY CỔ PHẦN APPLANCER
              </p>
              <p className="small-headline">
                Liên Hệ: 028 6273 3496 - contact@topdev.vn
              </p>
              <p className="small-headline">
                ĐKKD : 031 303 2338 - Cấp ngày : 27/11/2014
              </p>
            </div>
            <img
              src="https://accounts.topdev.vn/asset/images/logo_bocongthuong.jpgx"
              alt="Chứng nhận"
              className="h-10 object-cover"
            />
          </div>
          <div className="col-span-1">
            <h3 className="subheading mb-4 uppercase">Về TopDev</h3>
            <ul className="flex flex-col items-start gap-3">
              <li className="small-headline">Về chúng tôi</li>
              <li className="small-headline">Liên hệ</li>
              <li className="small-headline">Thỏa thuận sử dụng</li>
              <li className="small-headline">Cơ hội việc làm</li>
              <li className="small-headline">Quy định bảo mật</li>
              <li className="small-headline">
                Quy chế hoạt động của sàn giao dịch thương mại điện tử TOPDEV
              </li>
              <li className="small-headline">Giải quyết khiếu nại</li>
              <li className="small-headline">Ứng dụng di động</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="subheading mb-4 uppercase">Ứng viên</h3>
            <ul className="flex flex-col items-start gap-3">
              <li className="small-headline">Tính lương Gross - Net</li>
              <li className="small-headline">Tạo CV</li>
              <li className="small-headline">Tìm kiếm công việc IT</li>
              <li className="small-headline">Trắc nghiệm tính cách</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="subheading mb-4 uppercase">Nhà tuyển dụng</h3>
            <ul className="flex flex-col items-start gap-3">
              <li className="small-headline">Đăng việc làm IT</li>
              <li className="small-headline">Tìm kiếm nhân tài</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="body-2 mb-4">Theo dõi chúng tôi tại</h3>
            <div className="mb-4 flex flex-col items-start gap-3">
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                <FontAwesomeIcon icon={faTelegram} size="2x" />
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              </div>
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                <FontAwesomeIcon icon={faTiktok} size="2x" />
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </div>
            </div>
            <h3 className="body-2 mb-4 uppercase">Tải ứng dụng topdev ngay</h3>
            <div className="flex gap-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faQrcode} size="4x" />
              </div>
              <div className="flex flex-col gap-3">
                <img
                  src="	https://c.topdevvn.com/v4/assets/images/promote_app/app_store_img.png"
                  alt=""
                  className="h-[28px]"
                />
                <img
                  src="https://c.topdevvn.com/v4/assets/images/promote_app/google_play_img.png"
                  alt=""
                  className="h-[28px]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
