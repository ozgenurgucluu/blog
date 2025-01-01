"use client";
import React from "react";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { IoDocumentTexhrefutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { FaTruck } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-bgHeader w-auto h-28 text-white justify-center flex items-center gap-5 my-3">
        <span className="text-xl"> A call-to-action text</span>
        <button className="bg-blue-500 py-4 px-5 rounded-md font-semibold">
          CONTACT US
        </button>
      </div>
      <div className="flex justify-center sm:gap-48 my-5 container mx-auto">
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex gap-2 items-center">
            <IoCallOutline /> <span className="text-gray-600">444 9 368</span>
          </Link>
          <Link href="/" className="text-black">
            Haberler İçin İletişim!
          </Link>
          <Link href="/" className="text-gray-600 underline">
            İşaret Dili Hizmeti
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-gray-600 text-lg font-semibold">Destek</div>
          <Link href="/" className="flex gap-3 items-center">
            <span className="text-gray-600">İletişim Formu</span>
          </Link>
          <Link href="/" className="flex gap-3 items-center">
            <IoCallOutline />
            <span className="text-gray-600">444 2 369</span>
          </Link>
          <Link href="/" className="flex gap-3 items-center">
            <FaWhatsapp />
            <span className="text-gray-600">Whatsapp Destek</span>
          </Link>
          <Link href="/" className="flex gap-3 items-center">
            <SlEarphones />
            <span className="text-gray-600">Görüntülü Destek</span>
          </Link>
          <Link href="/" className="flex gap-3 items-center">
            <FaTruck />
            <span className="text-gray-600">Sipariş Takibi</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-gray-600 text-lg font-semibold">Destek</div>
          <Link href="/" className="text-gray-600">
            Sıkça Sorulan Sorular
          </Link>
          <Link href="/" className="text-gray-600">
            İade ve Değişim
          </Link>
          <Link href="/" className="text-gray-600">
            Kullanım Koşulları
          </Link>
          <Link href="/" className="text-gray-600">
            Site Haritası
          </Link>
          <Link href="/" className="text-gray-600">
            İşlem Rehberi
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-gray-600 text-lg font-semibold">Kurumsal</div>
          <Link href="/" className="text-gray-600">
            Hakkımızda
          </Link>
          <Link href="/" className="text-gray-600">
            Mağazalarımız
          </Link>
          <Link href="/" className="text-gray-600">
            Kurumsal
          </Link>
          <Link href="/" className="text-gray-600">
            Kariyer Fırsatları
          </Link>
          <Link href="/" className="text-gray-600">
            Kurumsal Destek
          </Link>
          <Link href="/" className="text-gray-600">
            Hediye Kart
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-gray-600 text-lg font-semibold">Politikalar</div>
          <Link href="/" className="text-gray-600">
            Aydınlatma Metni
          </Link>
          <Link href="/" className="text-gray-600">
            Aydınlatma Metni / Pazaryeri
          </Link>
          <Link href="/" className="text-gray-600">
            Veri Gizliliği ve Güvenliği Politikası
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-xs text-gray-700">
        <span>Copyright © 2025 Fizz | Powered by Blogger</span>
        <span>
          Design by Site5 WordPress Themes | Blogger Template by Lasantha -
          Premium Blogger Templates
        </span>
      </div>
    </div>
  );
};

export default Footer;
