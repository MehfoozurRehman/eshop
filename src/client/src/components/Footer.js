import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__top">
          <div className="footer__content__top__col">
            <a href="#" className="footer__content__top__col__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45.77"
                height="35.001"
                viewBox="0 0 45.77 35.001"
                className="footer__content__top__col__logo__img"
              >
                <path
                  id="noun_cloth_2129414"
                  d="M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z"
                  transform="translate(-416 -424)"
                />
              </svg>
              <div className="footer__content__top__col__logo__content">
                <span>E-</span>Shop
              </div>
            </a>
            <div className="footer__content__top__col__info">
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable. House My
              Brand designs clothing for the young.
            </div>
            <div className="footer__content__top__col__socials">
              <a href="#" className="footer__content__top__col__socials__link">
                <Facebook size={20} strokeWidth={1.5} color="currentcolor" />
              </a>
              <a href="#" className="footer__content__top__col__socials__link">
                <Twitter size={20} strokeWidth={1.5} color="currentcolor" />
              </a>
              <a href="#" className="footer__content__top__col__socials__link">
                <Instagram size={20} strokeWidth={1.5} color="currentcolor" />
              </a>
              <a href="#" className="footer__content__top__col__socials__link">
                <Linkedin size={20} strokeWidth={1.5} color="currentcolor" />
              </a>
              <a href="#" className="footer__content__top__col__socials__link">
                <Youtube size={20} strokeWidth={1.5} color="currentcolor" />
              </a>
            </div>
          </div>
          <div className="footer__content__top__col">
            <div className="footer__content__top__col__heading">
              Shopping online
            </div>
            <a href="#" className="footer__content__top__col__link">
              Order Status
            </a>
            <a href="#" className="footer__content__top__col__link">
              Shipping and Delivery
            </a>
            <a href="#" className="footer__content__top__col__link">
              Returns
            </a>
            <a href="#" className="footer__content__top__col__link">
              Payment Options
            </a>
            <a href="#" className="footer__content__top__col__link">
              Contact Us
            </a>
          </div>
          <div className="footer__content__top__col">
            <div className="footer__content__top__col__heading">
              Information
            </div>
            <a href="#" className="footer__content__top__col__link">
              Gift Cards
            </a>
            <a href="#" className="footer__content__top__col__link">
              Find a store
            </a>
            <a href="#" className="footer__content__top__col__link">
              Newsletter
            </a>
            <a href="#" className="footer__content__top__col__link">
              Bacome a member
            </a>
            <a href="#" className="footer__content__top__col__link">
              Site feedback
            </a>
          </div>
          <div className="footer__content__top__col">
            <div className="footer__content__top__col__heading">Contact</div>
            <a href="#" className="footer__content__top__col__link">
              store@gmail.com
            </a>
            <a href="#" className="footer__content__top__col__link">
              Hotline: +1 131 138 138
            </a>
          </div>
        </div>
        <div className="footer__content__bottom">
          DEVELOPED BY MEHFOOZ-UR-REHMAN - © 2022. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}
