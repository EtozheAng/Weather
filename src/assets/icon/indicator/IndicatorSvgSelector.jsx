const IndicatorSvgSelector = ({ id }) => {
  switch (id) {
    case 'humidity':
      return (
        <svg
          width="28"
          height="32"
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5786 4.2667C20.3762 4.26559 20.1765 4.31118 19.9971 4.39949C19.8177 4.48781 19.6639 4.61617 19.5491 4.77338C19.1475 5.31206 18.5705 6.10674 17.9257 7.04543C16.257 4.49604 14.6109 2.21332 13.4909 0.693288C13.3316 0.479153 13.1199 0.304354 12.8737 0.183678C12.6276 0.0630027 12.3542 0 12.0768 0C11.7993 0 11.526 0.0630027 11.2798 0.183678C11.0337 0.304354 10.822 0.479153 10.6626 0.693288C7.45535 5.01872 7.56207e-09 15.6163 7.56207e-09 20.6137C-0.000105384 23.4231 1.10141 26.1334 3.0927 28.2233C5.08399 30.3132 7.82446 31.6352 10.7871 31.935C13.7497 32.2348 16.7253 31.4912 19.1415 29.8473C21.5578 28.2034 23.2442 25.7752 23.8764 23.0298C25.1125 22.45 26.1529 21.5571 26.8813 20.4512C27.6096 19.3453 27.997 18.0701 28 16.7683C28 13.7229 23.5313 7.36543 21.6081 4.77338C21.4924 4.61702 21.3384 4.4893 21.1592 4.40109C20.9799 4.31287 20.7808 4.26677 20.5786 4.2667V4.2667ZM12.0768 30.9339C9.17482 30.931 6.39263 29.8427 4.34064 27.908C2.28865 25.9732 1.13446 23.3499 1.13131 20.6137C1.13131 15.787 9.13535 4.61337 11.5903 1.30663C11.6456 1.23364 11.7186 1.17415 11.8032 1.1331C11.8878 1.09206 11.9816 1.07065 12.0768 1.07065C12.1719 1.07065 12.2657 1.09206 12.3503 1.1331C12.4349 1.17415 12.5079 1.23364 12.5632 1.30663C15.0182 4.61337 23.0222 15.787 23.0222 20.6137C23.0191 23.3499 21.8649 25.9732 19.8129 27.908C17.7609 29.8427 14.9787 30.931 12.0768 30.9339V30.9339Z"
            fill="#020419"
          />
          <path
            d="M16.7307 11.4138C16.7802 11.4957 16.8518 11.5638 16.9383 11.6111C17.0247 11.6584 17.1229 11.6833 17.2229 11.6832C17.321 11.6833 17.4174 11.659 17.5023 11.6128C17.6325 11.5428 17.728 11.4269 17.7676 11.2906C17.8073 11.1543 17.788 11.0087 17.7139 10.8858C16.9981 9.70516 16.2563 8.53866 15.4891 7.38707C15.4095 7.26684 15.2824 7.18137 15.1359 7.14946C14.9894 7.11755 14.8355 7.14182 14.708 7.21693C14.5804 7.29205 14.4898 7.41184 14.4559 7.54997C14.4221 7.6881 14.4479 7.83325 14.5275 7.95348C15.2879 9.09204 16.0225 10.2457 16.7307 11.4138V11.4138ZM10.5968 16.0699C9.98724 15.7102 9.27932 15.5266 8.56041 15.5419C7.84325 15.5264 7.13708 15.7101 6.5297 16.0699C6.17101 16.2707 5.77099 16.3969 5.3564 16.4401C4.9418 16.4833 4.5222 16.4426 4.12566 16.3206C4.05732 16.2946 3.98423 16.2816 3.91056 16.2823C3.83689 16.283 3.76409 16.2974 3.69632 16.3247C3.62855 16.3519 3.56714 16.3915 3.5156 16.4411C3.46406 16.4907 3.42341 16.5495 3.39596 16.6139C2.76502 17.8717 2.38169 19.2271 2.26465 20.614C2.26465 23.0682 3.29864 25.4219 5.13914 27.1573C6.97965 28.8926 9.47592 29.8676 12.0788 29.8676C14.6817 29.8676 17.1779 28.8926 19.0184 27.1573C20.8589 25.4219 21.8929 23.0682 21.8929 20.614C21.7735 19.2251 21.3883 17.8681 20.756 16.6086C20.6994 16.4805 20.5922 16.3783 20.457 16.3235C20.3219 16.2687 20.1694 16.2658 20.0319 16.3153C19.6344 16.441 19.2127 16.4842 18.7958 16.4419C18.3788 16.3995 17.9766 16.2726 17.6166 16.0699C17.0016 15.7243 16.299 15.5419 15.583 15.5419C14.8671 15.5419 14.1645 15.7243 13.5495 16.0699C13.1044 16.3246 12.5938 16.4593 12.0731 16.4593C11.5525 16.4593 11.0419 16.3246 10.5968 16.0699V16.0699ZM9.81616 19.2007C10.1518 19.2007 10.4799 19.2945 10.7589 19.4703C11.038 19.6461 11.2555 19.896 11.384 20.1884C11.5124 20.4808 11.546 20.8025 11.4805 21.1128C11.415 21.4232 11.2534 21.7083 11.0161 21.9321C10.7788 22.1559 10.4764 22.3083 10.1472 22.37C9.81804 22.4317 9.47684 22.4 9.16676 22.2789C8.85668 22.1578 8.59165 21.9528 8.40518 21.6896C8.21872 21.4265 8.11919 21.1172 8.11919 20.8007C8.12054 20.3767 8.29975 19.9705 8.61771 19.6707C8.93566 19.3709 9.36651 19.2019 9.81616 19.2007V19.2007ZM14.3414 26.1341C14.0058 26.1341 13.6777 26.0403 13.3986 25.8645C13.1196 25.6887 12.9021 25.4388 12.7736 25.1464C12.6452 24.854 12.6116 24.5323 12.6771 24.222C12.7425 23.9116 12.9042 23.6265 13.1415 23.4027C13.3788 23.1789 13.6812 23.0266 14.0104 22.9648C14.3395 22.9031 14.6807 22.9348 14.9908 23.0559C15.3009 23.177 15.5659 23.3821 15.7524 23.6452C15.9389 23.9083 16.0384 24.2177 16.0384 24.5341C16.037 24.9581 15.8578 25.3643 15.5399 25.6641C15.2219 25.9639 14.7911 26.1329 14.3414 26.1341V26.1341ZM15.0881 19.3393C15.143 19.2917 15.2074 19.2548 15.2775 19.2306C15.3477 19.2064 15.4221 19.1955 15.4967 19.1985C15.5713 19.2015 15.6445 19.2182 15.7123 19.2479C15.78 19.2776 15.8408 19.3195 15.8913 19.3713C15.9418 19.4232 15.981 19.4839 16.0066 19.55C16.0323 19.6161 16.0438 19.6863 16.0407 19.7566C16.0375 19.827 16.0197 19.896 15.9883 19.9599C15.9568 20.0237 15.9123 20.0811 15.8574 20.1287L9.0695 25.9955C8.95848 26.0917 8.81149 26.1423 8.66085 26.1363C8.51021 26.1303 8.36828 26.0682 8.26626 25.9635C8.16425 25.8588 8.11051 25.7202 8.11688 25.5782C8.12324 25.4361 8.18919 25.3023 8.3002 25.2061L15.0881 19.3393Z"
            fill="#020419"
          />
          <path
            d="M9.81175 21.3343C10.1242 21.3343 10.3774 21.0955 10.3774 20.8009C10.3774 20.5064 10.1242 20.2676 9.81175 20.2676C9.49935 20.2676 9.24609 20.5064 9.24609 20.8009C9.24609 21.0955 9.49935 21.3343 9.81175 21.3343Z"
            fill="#020419"
          />
          <path
            d="M14.342 25.0667C14.6544 25.0667 14.9077 24.8279 14.9077 24.5333C14.9077 24.2388 14.6544 24 14.342 24C14.0296 24 13.7764 24.2388 13.7764 24.5333C13.7764 24.8279 14.0296 25.0667 14.342 25.0667Z"
            fill="#020419"
          />
          <path
            d="M18.3 13.3333C18.6124 13.3333 18.8657 13.0945 18.8657 12.7999C18.8657 12.5054 18.6124 12.2666 18.3 12.2666C17.9876 12.2666 17.7344 12.5054 17.7344 12.7999C17.7344 13.0945 17.9876 13.3333 18.3 13.3333Z"
            fill="#020419"
          />
        </svg>
      )
    case 'sunrise':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33366 24.0003H2.66699M8.41915 16.4191L6.53353 14.5335M23.5814 16.4191L25.467 14.5335M29.3337 24.0003H26.667M9.33366 24.0003C9.33366 20.3184 12.3184 17.3337 16.0003 17.3337C19.6822 17.3337 22.667 20.3184 22.667 24.0003M29.3337 29.3337H2.66699M21.3337 8.00033L16.0003 2.66699M16.0003 2.66699L10.667 8.00033M16.0003 2.66699V12.0003"
            stroke="#020419"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'uv-index':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0003 2.66699V5.33366M16.0003 26.667V29.3337M5.33366 16.0003H2.66699M8.41915 8.41915L6.53353 6.53353M23.5815 8.41915L25.4671 6.53353M8.41915 23.587L6.53353 25.4726M23.5815 23.587L25.4671 25.4726M29.3337 16.0003H26.667M22.667 16.0003C22.667 19.6822 19.6822 22.667 16.0003 22.667C12.3184 22.667 9.33366 19.6822 9.33366 16.0003C9.33366 12.3184 12.3184 9.33366 16.0003 9.33366C19.6822 9.33366 22.667 12.3184 22.667 16.0003Z"
            stroke="#020419"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'sunset':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33366 24.0003H2.66699M8.41915 16.4191L6.53353 14.5335M23.5814 16.4191L25.467 14.5335M29.3337 24.0003H26.667M9.33366 24.0003C9.33366 20.3184 12.3184 17.3337 16.0003 17.3337C19.6822 17.3337 22.667 20.3184 22.667 24.0003M29.3337 29.3337H2.66699M21.3337 6.66699L16.0003 12.0003M16.0003 12.0003L10.667 6.66699M16.0003 12.0003V2.66699"
            stroke="#020419"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    default:
      return null
  }
}

export default IndicatorSvgSelector
