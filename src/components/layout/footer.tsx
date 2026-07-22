import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const LOGO =
  'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp';

export function Footer() {
  return (
    <footer className="bg-[#f7f7f7] px-6 pb-10 pt-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="relative h-[58px] w-[190px]">
              <Image
                src={LOGO}
                alt="Accredian logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <div className="mt-8 flex items-center gap-5 text-slate-600">
              <Link href="https://facebook.com/accredianlearn" target="_blank">
                <FaFacebookF className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/accredianedu/" target="_blank">
                <FaLinkedinIn className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/accredianedu" target="_blank">
                <FaTwitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/accredian_edu" target="_blank">
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" target="_blank">
                <FaYoutube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="md:text-right">
            <button
              type="button"
              className="inline-flex h-[58px] min-w-[166px] items-center justify-center rounded-[10px] bg-[#2f73df] px-7 text-[18px] font-semibold text-white shadow-[0_10px_18px_rgba(47,115,223,0.24)]"
            >
              Enquire Now
            </button>
            <p className="mt-4 text-[16px] text-slate-600">Speak with our Advisor</p>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2f2f2f]/40 pt-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-[20px] font-semibold text-slate-950">Accredian</h3>
              <ul className="mt-5 space-y-4 text-[18px] text-slate-700">
                <li>
                  <Link href="https://accredian.com/About" target="_blank">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="https://blog.accredian.com/" target="_blank">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://accredian.com/whyaccredian" target="_blank">
                    Why Accredian
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold text-slate-950">Contact Us</h3>
              <p className="mt-5 text-[18px] leading-8 text-slate-700">
                Email us:{' '}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-[#3169e2]"
                >
                  enterprise@accredian.com
                </a>
              </p>
              <p className="mt-3 max-w-[620px] text-[18px] leading-8 text-slate-700">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2f2f2f]/40 pt-6 text-center text-[16px] text-slate-700">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}