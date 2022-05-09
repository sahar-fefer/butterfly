import React from 'react'
import { Link } from "gatsby"
import "../styles/nav.scss"
import { DonateHart } from "../svg"

interface Props { }

function Nav(props: Props) {
    const { } = props

    return (
        <nav>
            <div className='left'>
                <Link to="/" className="donate">
                    לתרומה
                    <DonateHart color='white' />
                </Link>
                <button className="language">EN</button>
            </div>
            <div className='right'>
                <div className="links">
                    <Link to='contact'>צור קשר</Link>
                    <Link to='about'>אודות</Link>
                    <Link to='donated'>מתנדבים ותורמים</Link>
                    <Link to='events'>אירועים</Link>
                    <Link to='bracelets'>צמידים</Link>
                    <Link to='omers-house'>הבית של עומר</Link>
                    <Link to='omers-batterfly'>הפרפרים של עומר</Link>
                </div>
                <div className="separator" />
                <div className="logo">
                    <svg width="98" height="52" viewBox="0 0 98 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0922 27.248L11.0682 28.76V28.784C10.9882 29.056 10.9082 29.24 10.8282 29.336C10.7642 29.432 10.6442 29.48 10.4682 29.48C10.1642 29.48 9.66019 29.464 8.95619 29.432L7.61219 29.408C6.97219 29.408 6.66019 29.232 6.67619 28.88C6.66019 28.32 6.62819 27.272 6.58019 25.736C6.54819 24.2 6.52419 23.352 6.50819 23.192C6.33219 19.976 6.24419 17.424 6.24419 15.536C6.24419 14.608 6.25219 13.896 6.26819 13.4C6.26819 13.256 6.32419 13.136 6.43619 13.04C6.56419 12.944 6.70819 12.896 6.86819 12.896L8.59619 12.944C9.34819 12.976 9.93219 12.992 10.3482 12.992C10.5242 12.992 10.6762 13.048 10.8042 13.16C10.9482 13.256 11.0202 13.384 11.0202 13.544C11.0042 14.264 10.9962 15.312 10.9962 16.688L11.0202 21.104C11.0362 21.44 11.0442 21.968 11.0442 22.688L11.0922 27.248ZM9.89219 26.696C9.89219 25.016 9.87619 22.92 9.84419 20.408C9.81219 17.896 9.77219 15.768 9.72419 14.024H9.34019H8.93219C8.40419 14.024 7.93219 14.04 7.51619 14.072C7.48419 15.224 7.54819 17.696 7.70819 21.488C7.80419 23.872 7.85219 25.816 7.85219 27.32V28.352H9.89219V28.304V26.696ZM16.8925 23.864C16.3965 23.864 16.1485 23.368 16.1485 22.376C16.1485 22.216 16.1725 22.04 16.2205 21.848C16.2845 21.464 16.3165 21.128 16.3165 20.84V19.304C16.3165 19.128 16.3005 18.656 16.2685 17.888L16.1965 16.616V16.592V16.352C16.1965 16.144 16.1885 16.008 16.1725 15.944C16.1565 15.256 16.1245 14.808 16.0765 14.6C16.0445 14.392 15.9005 14.288 15.6445 14.288L15.0445 14.312C14.9485 14.328 14.8125 14.336 14.6365 14.336C14.1245 14.336 13.8525 14.136 13.8205 13.736C13.8205 13.4 14.0205 13.152 14.4205 12.992C14.7085 13.008 15.0205 13.056 15.3565 13.136L15.9805 13.256C16.1245 13.112 16.3565 13.04 16.6765 13.04C16.8685 13.04 17.0285 13.128 17.1565 13.304C17.3005 13.464 17.3725 13.64 17.3725 13.832C17.4045 14.728 17.4205 15.568 17.4205 16.352L17.4685 17.888C17.4685 18.288 17.4605 18.632 17.4445 18.92C17.4285 19.304 17.4205 19.728 17.4205 20.192C17.4205 20.496 17.4685 21.064 17.5645 21.896L17.6125 22.376C17.6765 22.52 17.7085 22.672 17.7085 22.832C17.7085 23.104 17.6285 23.344 17.4685 23.552C17.3085 23.76 17.1165 23.864 16.8925 23.864ZM24.6149 29C24.3269 28.856 24.1429 28.752 24.0629 28.688C23.9829 28.608 23.9429 28.496 23.9429 28.352V26.6V21.512C23.9429 19.864 23.9189 18.6 23.8709 17.72C23.8229 16.824 23.7269 16.12 23.5829 15.608C23.4549 15.08 23.2389 14.712 22.9349 14.504C22.6309 14.296 22.2069 14.192 21.6629 14.192L20.8949 14.216C20.6069 14.216 20.3829 14.176 20.2229 14.096C20.0789 14 20.0069 13.832 20.0069 13.592C20.0069 13.128 20.3189 12.896 20.9429 12.896C21.3429 12.896 21.7589 12.96 22.1909 13.088C22.6229 13.216 22.8709 13.288 22.9349 13.304C23.6069 13.48 24.0949 13.88 24.3989 14.504C24.7029 15.128 24.8869 16.032 24.9509 17.216C25.0309 18.384 25.0709 20.248 25.0709 22.808V23C25.0549 23.064 25.0469 23.136 25.0469 23.216C25.0469 23.424 25.0709 23.76 25.1189 24.224L25.1669 25.208C25.1669 25.48 25.1909 25.88 25.2389 26.408C25.3029 26.904 25.3349 27.544 25.3349 28.328C25.3349 28.36 25.3349 28.456 25.3349 28.616C25.3349 28.76 25.2789 28.864 25.1669 28.928C25.0549 28.976 24.8709 29 24.6149 29ZM30.3361 29C29.8561 29 29.4161 28.952 29.0161 28.856C28.6321 28.744 28.2401 28.56 27.8401 28.304C27.7441 28.208 27.6881 28.136 27.6721 28.088V27.992C27.6721 27.864 27.7121 27.752 27.7921 27.656C27.8721 27.544 27.9681 27.48 28.0801 27.464C28.1601 27.48 28.2481 27.52 28.3441 27.584C28.4401 27.632 28.5361 27.672 28.6321 27.704C29.0321 27.896 29.5521 27.992 30.1921 27.992C30.8641 27.992 31.3601 27.592 31.6801 26.792C32.0001 25.992 32.1601 24.744 32.1601 23.048V21.272L32.0881 18.344C32.0881 16.84 31.9601 15.76 31.7041 15.104C31.4481 14.448 31.0161 14.08 30.4081 14L29.6161 13.88C29.4721 13.912 29.3681 14.04 29.3041 14.264C29.2401 14.488 29.1841 14.896 29.1361 15.488C29.1201 15.68 29.1121 15.96 29.1121 16.328C29.1121 17.032 29.1841 17.904 29.3281 18.944C29.3441 19.248 29.3921 19.496 29.4721 19.688C29.5521 19.864 29.6561 20.032 29.7841 20.192C29.9441 20.352 30.0241 20.512 30.0241 20.672C30.0241 20.848 29.9361 21.056 29.7601 21.296C29.6001 21.52 29.3681 21.592 29.0641 21.512C28.7761 21.448 28.5681 21.28 28.4401 21.008C28.3121 20.72 28.2241 20.368 28.1761 19.952C28.1441 19.536 28.1041 18.784 28.0561 17.696L28.0321 17.192C28.0321 16.824 28.0641 16.256 28.1281 15.488C28.2401 13.68 28.5601 12.776 29.0881 12.776C29.2321 12.776 29.3681 12.832 29.4961 12.944L30.6961 13.04C31.6401 13.136 32.3281 13.656 32.7601 14.6C33.2081 15.528 33.4321 16.944 33.4321 18.848V22.688C33.4321 23.28 33.4001 23.928 33.3361 24.632C33.2721 25.336 33.1841 25.88 33.0721 26.264C32.8161 27.24 32.4721 27.944 32.0401 28.376C31.6081 28.792 31.0401 29 30.3361 29ZM40.4821 29C40.1941 28.856 40.0101 28.752 39.9301 28.688C39.8501 28.608 39.8101 28.496 39.8101 28.352V26.6V21.512C39.8101 19.864 39.7861 18.6 39.7381 17.72C39.6901 16.824 39.5941 16.12 39.4501 15.608C39.3221 15.08 39.1061 14.712 38.8021 14.504C38.4981 14.296 38.0741 14.192 37.5301 14.192L36.7621 14.216C36.4741 14.216 36.2501 14.176 36.0901 14.096C35.9461 14 35.8741 13.832 35.8741 13.592C35.8741 13.128 36.1861 12.896 36.8101 12.896C37.2101 12.896 37.6261 12.96 38.0581 13.088C38.4901 13.216 38.7381 13.288 38.8021 13.304C39.4741 13.48 39.9621 13.88 40.2661 14.504C40.5701 15.128 40.7541 16.032 40.8181 17.216C40.8981 18.384 40.9381 20.248 40.9381 22.808V23C40.9221 23.064 40.9141 23.136 40.9141 23.216C40.9141 23.424 40.9381 23.76 40.9861 24.224L41.0341 25.208C41.0341 25.48 41.0581 25.88 41.1061 26.408C41.1701 26.904 41.2021 27.544 41.2021 28.328C41.2021 28.36 41.2021 28.456 41.2021 28.616C41.2021 28.76 41.1461 28.864 41.0341 28.928C40.9221 28.976 40.7381 29 40.4821 29ZM46.2033 29C45.7233 29 45.2833 28.952 44.8833 28.856C44.4993 28.744 44.1073 28.56 43.7073 28.304C43.6113 28.208 43.5553 28.136 43.5393 28.088V27.992C43.5393 27.864 43.5793 27.752 43.6593 27.656C43.7393 27.544 43.8353 27.48 43.9473 27.464C44.0273 27.48 44.1153 27.52 44.2113 27.584C44.3073 27.632 44.4033 27.672 44.4993 27.704C44.8993 27.896 45.4193 27.992 46.0592 27.992C46.7313 27.992 47.2273 27.592 47.5473 26.792C47.8673 25.992 48.0273 24.744 48.0273 23.048V21.272L47.9553 18.344C47.9553 16.84 47.8273 15.76 47.5713 15.104C47.3153 14.448 46.8833 14.08 46.2753 14L45.4833 13.88C45.3393 13.912 45.2353 14.04 45.1713 14.264C45.1073 14.488 45.0513 14.896 45.0033 15.488C44.9873 15.68 44.9793 15.96 44.9793 16.328C44.9793 17.032 45.0513 17.904 45.1953 18.944C45.2113 19.248 45.2593 19.496 45.3393 19.688C45.4193 19.864 45.5233 20.032 45.6513 20.192C45.8113 20.352 45.8913 20.512 45.8913 20.672C45.8913 20.848 45.8033 21.056 45.6273 21.296C45.4673 21.52 45.2353 21.592 44.9313 21.512C44.6433 21.448 44.4353 21.28 44.3073 21.008C44.1793 20.72 44.0913 20.368 44.0433 19.952C44.0113 19.536 43.9713 18.784 43.9233 17.696L43.8993 17.192C43.8993 16.824 43.9313 16.256 43.9953 15.488C44.1073 13.68 44.4273 12.776 44.9553 12.776C45.0993 12.776 45.2353 12.832 45.3633 12.944L46.5633 13.04C47.5073 13.136 48.1953 13.656 48.6273 14.6C49.0753 15.528 49.2993 16.944 49.2993 18.848V22.688C49.2993 23.28 49.2673 23.928 49.2033 24.632C49.1393 25.336 49.0513 25.88 48.9393 26.264C48.6833 27.24 48.3393 27.944 47.9073 28.376C47.4753 28.792 46.9073 29 46.2033 29ZM55.8933 29C55.7173 29 55.5653 28.944 55.4373 28.832C55.3253 28.72 55.2693 28.584 55.2693 28.424C55.2693 28.088 55.2773 27.776 55.2933 27.488C55.3413 27.072 55.3653 26.768 55.3653 26.576L55.2213 23.696C55.1893 23.088 55.1493 22.168 55.1013 20.936C55.1813 20.68 55.2133 20.344 55.1973 19.928V19.64C55.1813 19.352 55.1733 18.76 55.1733 17.864C55.1733 16.872 55.1653 16.232 55.1493 15.944C55.1013 14.84 54.8133 14.288 54.2853 14.288L53.8293 14.312H53.2773C52.4293 14.312 51.9893 14.08 51.9573 13.616C51.9573 13.456 52.0293 13.32 52.1733 13.208C52.3173 13.08 52.4853 13.008 52.6773 12.992C53.3013 13.168 54.0133 13.256 54.8133 13.256C55.0853 13.112 55.3653 13.04 55.6533 13.04C55.8293 13.04 55.9813 13.128 56.1093 13.304C56.2533 13.464 56.3333 13.64 56.3493 13.832C56.3813 14.76 56.3973 15.632 56.3973 16.448L56.3733 19.064V20.84C56.3733 21.976 56.3893 23.136 56.4213 24.32V24.488C56.5653 25.704 56.6373 26.456 56.6373 26.744C56.7013 28.248 56.4533 29 55.8933 29ZM52.6293 29C52.4693 29 52.3253 28.944 52.1973 28.832C52.0853 28.72 52.0293 28.584 52.0293 28.424C52.0293 26.856 52.0533 25.344 52.1013 23.888C52.1333 21.936 52.1493 20.44 52.1493 19.4C52.1493 19.192 52.1413 19 52.1253 18.824V18.392C52.1253 17.656 52.1973 17.16 52.3413 16.904C52.4213 16.792 52.5333 16.736 52.6773 16.736C52.8373 16.736 52.9893 16.936 53.1333 17.336C53.2613 17.672 53.3253 18.16 53.3253 18.8C53.3253 19.472 53.3093 20.104 53.2773 20.696C53.2613 21.288 53.2533 21.904 53.2533 22.544L53.3013 25.328L53.3493 28.064C53.3493 28.336 53.2853 28.56 53.1573 28.736C53.0453 28.912 52.8693 29 52.6293 29ZM5.69612 51C5.40812 50.856 5.22412 50.752 5.14412 50.688C5.06412 50.608 5.02412 50.496 5.02412 50.352V48.6V43.512C5.02412 41.864 5.00012 40.6 4.95212 39.72C4.90412 38.824 4.80812 38.12 4.66412 37.608C4.53612 37.08 4.32012 36.712 4.01612 36.504C3.71212 36.296 3.28812 36.192 2.74412 36.192L1.97612 36.216C1.68812 36.216 1.46412 36.176 1.30412 36.096C1.16012 36 1.08812 35.832 1.08812 35.592C1.08812 35.128 1.40012 34.896 2.02412 34.896C2.42412 34.896 2.84012 34.96 3.27212 35.088C3.70412 35.216 3.95212 35.288 4.01612 35.304C4.68812 35.48 5.17612 35.88 5.48012 36.504C5.78412 37.128 5.96812 38.032 6.03212 39.216C6.11212 40.384 6.15212 42.248 6.15212 44.808V45C6.13612 45.064 6.12812 45.136 6.12812 45.216C6.12812 45.424 6.15212 45.76 6.20012 46.224L6.24812 47.208C6.24812 47.48 6.27212 47.88 6.32012 48.408C6.38412 48.904 6.41612 49.544 6.41612 50.328C6.41612 50.36 6.41612 50.456 6.41612 50.616C6.41612 50.76 6.36012 50.864 6.24812 50.928C6.13612 50.976 5.95212 51 5.69612 51ZM15.5693 50.28C15.5693 50.584 15.4573 50.784 15.2333 50.88C15.0093 50.976 14.5853 51.064 13.9613 51.144C13.8653 51.16 13.5373 51.168 12.9773 51.168C12.7853 51.168 12.6413 51.096 12.5453 50.952C12.4653 50.792 12.4253 50.6 12.4253 50.376C12.4253 50.264 12.4653 50.184 12.5453 50.136C12.6413 50.072 12.7933 50.024 13.0013 49.992C13.0653 49.976 13.4333 49.896 14.1053 49.752L14.2253 43.368L14.1773 42.168V41.52C14.1933 41.072 14.1933 40.448 14.1773 39.648C14.1613 38.832 14.1373 38.176 14.1053 37.68C14.0733 37.152 14.0173 36.776 13.9373 36.552C13.8733 36.328 13.7373 36.208 13.5293 36.192L13.2893 37.344C13.0333 38.8 12.6573 41.312 12.1613 44.88C12.0173 45.792 11.8893 46.72 11.7773 47.664C11.6333 48.848 11.4733 49.92 11.2973 50.88C11.2653 51.008 11.1853 51.104 11.0573 51.168C10.9293 51.248 10.7853 51.272 10.6253 51.24C10.4333 51.208 10.2733 51.12 10.1453 50.976C10.0333 50.816 9.99331 50.648 10.0253 50.472L10.2173 49.2C10.2973 48.48 10.4013 47.816 10.5293 47.208L10.7453 46.2C10.8733 45.64 11.0253 44.904 11.2013 43.992L11.2253 43.728L11.2733 43.44C11.3053 43.328 11.3213 43.272 11.3213 43.272L11.3453 43.152C11.6013 41.056 11.8733 39.184 12.1613 37.536L12.3053 36.96C12.3533 36.8 12.3853 36.656 12.4013 36.528C12.4173 36.384 12.4333 36.264 12.4493 36.168C12.2573 36.152 11.9613 36.16 11.5613 36.192C11.3853 36.208 11.1613 36.216 10.8893 36.216C10.8733 36.168 10.8253 36.096 10.7453 36C10.6813 35.888 10.6493 35.752 10.6493 35.592C10.6493 35.192 11.0093 34.992 11.7293 34.992C12.1773 34.992 12.6573 35.008 13.1693 35.04C13.6973 35.072 14.0893 35.104 14.3453 35.136C14.6013 35.184 14.8173 35.288 14.9933 35.448C15.1853 35.592 15.2813 35.776 15.2813 36V36.84C15.2813 37.72 15.2893 38.44 15.3053 39V39.576C15.3533 41.208 15.3773 42.928 15.3773 44.736C15.3933 46.768 15.4573 48.576 15.5693 50.16V50.28ZM22.4564 51C22.2644 51 22.0884 50.936 21.9284 50.808C21.7844 50.68 21.7124 50.52 21.7124 50.328C21.7124 49.352 21.6884 48.256 21.6404 47.04C21.6084 46.272 21.5924 45.52 21.5924 44.784V43.8L21.5684 43.488C21.5524 43.408 21.5444 43.312 21.5444 43.2C21.5444 43.104 21.5524 43.048 21.5684 43.032V42.936C21.5044 41.672 21.4724 39.768 21.4724 37.224V36.6C21.4724 36.424 21.3124 36.336 20.9924 36.336C20.3204 36.336 19.8404 36.232 19.5524 36.024C19.3764 35.928 19.2884 35.792 19.2884 35.616C19.2884 35.472 19.3684 35.352 19.5284 35.256C19.7044 35.16 19.8804 35.112 20.0564 35.112C20.2004 35.112 20.5924 35.144 21.2324 35.208C21.3124 35.208 21.3684 35.216 21.4004 35.232C21.8964 35.248 22.2324 35.456 22.4084 35.856C22.5844 36.24 22.6724 36.56 22.6724 36.816C22.6724 38.224 22.7444 40.768 22.8884 44.448C22.9844 46.496 23.0324 48.52 23.0324 50.52C23.0324 50.664 22.9764 50.784 22.8644 50.88C22.7524 50.96 22.6164 51 22.4564 51ZM31.0204 35.832C31.0204 35.576 31.0684 35.384 31.1644 35.256C31.2604 35.128 31.3884 35.064 31.5484 35.064C31.7404 35.064 31.9084 35.152 32.0524 35.328C32.2124 35.504 32.2924 35.728 32.2924 36L32.2684 37.08C32.2524 37.496 32.2444 38.008 32.2444 38.616L32.0044 42.36C31.9724 42.808 31.9484 43.152 31.9324 43.392C31.9164 43.632 31.9004 43.816 31.8844 43.944L31.8124 44.736L31.7644 45.312C31.7644 46.624 31.6364 47.656 31.3804 48.408C31.1244 49.144 30.6364 49.824 29.9164 50.448L29.0524 50.832C28.3324 51.136 27.9404 51.296 27.8764 51.312C27.7964 51.328 27.6844 51.336 27.5404 51.336C27.1244 51.336 26.8764 51.16 26.7964 50.808V50.712C26.7964 50.552 26.8524 50.392 26.9644 50.232L27.9244 49.944L28.5244 49.632C28.4124 49.152 28.3164 48.512 28.2364 47.712C28.1564 46.912 28.1084 46.184 28.0924 45.528C28.0924 45.192 28.0604 44.88 27.9964 44.592C27.9324 44.304 27.8284 43.952 27.6844 43.536C27.4764 42.912 27.3084 42.304 27.1804 41.712C27.0524 41.12 26.9724 40.36 26.9404 39.432L26.8444 37.56L26.7964 36C26.7964 35.424 27.0684 35.136 27.6124 35.136C27.7564 35.136 27.8764 35.2 27.9724 35.328C28.0684 35.456 28.1164 35.592 28.1164 35.736L28.1644 37.608C28.1644 37.56 28.1804 38.096 28.2124 39.216C28.2284 39.984 28.2844 40.664 28.3804 41.256C28.4924 41.832 28.6364 42.52 28.8124 43.32C28.9084 43.704 28.9884 44.08 29.0524 44.448C29.1324 44.816 29.1724 45.136 29.1724 45.408L29.2444 49.296C29.4364 49.216 29.5404 49.176 29.5564 49.176C29.6844 49.112 29.8044 49.024 29.9164 48.912C30.0444 48.8 30.1244 48.696 30.1564 48.6C30.1724 48.552 30.2204 48.44 30.3004 48.264C30.3804 48.072 30.4364 47.816 30.4684 47.496C30.5004 46.792 30.5324 45.984 30.5644 45.072L30.8524 39.456C30.9004 37.808 30.9484 36.776 30.9964 36.36L31.0204 35.832ZM44.668 51.096C44.412 51.16 44.14 51.192 43.852 51.192C43.324 51.192 42.908 51.04 42.604 50.736C42.316 50.432 42.172 49.984 42.172 49.392C42.172 48.8 42.324 47.888 42.628 46.656C42.948 45.424 43.244 44.416 43.516 43.632C43.692 43.056 43.988 42.232 44.404 41.16L44.716 40.32C44.828 39.984 44.916 39.536 44.98 38.976C45.044 38.4 45.076 37.808 45.076 37.2C45.076 36.752 45.068 36.432 45.052 36.24C44.764 36.192 44.532 36.16 44.356 36.144C44.196 36.128 43.868 36.112 43.372 36.096C42.444 36.064 41.844 35.968 41.572 35.808C41.396 35.696 41.308 35.56 41.308 35.4V34.608C41.308 34.304 41.292 34.016 41.26 33.744C41.228 33.472 41.204 33.288 41.188 33.192C41.124 32.264 41.324 31.8 41.788 31.8C42.012 31.8 42.196 31.896 42.34 32.088C42.484 32.28 42.572 32.504 42.604 32.76C42.604 32.856 42.58 32.992 42.532 33.168L42.508 33.624L42.484 34.896C42.644 34.896 43.044 34.928 43.684 34.992L44.212 35.04L45.316 35.088H45.508H45.7C46.132 35.088 46.364 35.296 46.396 35.712C46.476 36.224 46.516 36.968 46.516 37.944C46.516 38.472 46.5 38.824 46.468 39C46.324 39.832 46.012 40.872 45.532 42.12L45.172 43.104C44.084 46.112 43.484 48.096 43.372 49.056C43.34 49.28 43.324 49.424 43.324 49.488C43.324 49.664 43.38 49.792 43.492 49.872C43.604 49.952 43.82 49.992 44.14 49.992C44.348 49.992 44.516 49.984 44.644 49.968C44.804 49.952 44.916 50.016 44.98 50.16C45.06 50.288 45.092 50.456 45.076 50.664C45.044 50.904 44.908 51.048 44.668 51.096ZM56.7051 41.688C56.7051 42.552 56.7131 43.264 56.7291 43.824C56.7451 44.768 56.6491 45.96 56.4411 47.4C56.2331 48.84 56.0011 49.752 55.7451 50.136C55.4891 50.552 55.1851 50.848 54.8331 51.024C54.4811 51.216 54.0571 51.312 53.5611 51.312C52.9371 51.312 52.3611 51.168 51.8331 50.88C51.3211 50.576 50.9771 50.152 50.8011 49.608C50.7691 49.528 50.7131 49.368 50.6331 49.128C50.5531 48.872 50.4891 48.64 50.4411 48.432C50.4091 48.224 50.3851 47.992 50.3691 47.736C50.3371 47.128 50.3211 46.696 50.3211 46.44L50.3451 44.976L50.4171 42.648L50.4411 40.344C50.4411 39.16 50.4171 38.152 50.3691 37.32L50.2251 36.552C50.1451 36.296 50.1051 36.064 50.1051 35.856L50.0811 35.448L50.6331 34.896C50.8571 34.896 51.0651 34.96 51.2571 35.088C51.4491 35.216 51.5531 35.368 51.5691 35.544C51.5851 35.688 51.5931 35.976 51.5931 36.408C51.5931 36.904 51.5851 37.304 51.5691 37.608C51.5691 38.44 51.5771 39.008 51.5931 39.312L51.6171 40.008V40.704V40.872C51.6331 40.984 51.6411 41.16 51.6411 41.4C51.6411 41.688 51.6171 42.144 51.5691 42.768C51.5371 43.504 51.5211 43.976 51.5211 44.184L51.5451 44.928C51.6731 44.896 51.8011 44.84 51.9291 44.76C52.2491 44.552 52.4891 44.24 52.6491 43.824C52.8091 43.408 52.9051 42.88 52.9371 42.24C52.9851 41.584 53.0091 40.656 53.0091 39.456V37.344V35.592C53.0091 35.432 53.0331 35.32 53.0811 35.256C53.1451 35.176 53.3131 35.072 53.5851 34.944C53.8411 34.944 54.0171 34.976 54.1131 35.04C54.2091 35.088 54.2651 35.144 54.2811 35.208C54.2971 35.272 54.3051 35.408 54.3051 35.616C54.3051 36.432 54.2731 37.072 54.2091 37.536C54.1611 38.064 54.1371 38.464 54.1371 38.736L54.0891 39.72C54.0411 40.168 54.0171 40.504 54.0171 40.728C54.0171 40.808 54.0251 40.88 54.0411 40.944V41.136C54.0411 42.24 53.9771 43.104 53.8491 43.728C53.7211 44.336 53.4811 44.816 53.1291 45.168C52.7931 45.504 52.2811 45.768 51.5931 45.96L51.7371 48.312C51.7691 48.92 51.9451 49.432 52.2651 49.848C52.5851 50.264 52.9531 50.472 53.3691 50.472C53.7371 50.472 54.0491 50.304 54.3051 49.968C54.5611 49.632 54.7371 49.2 54.8331 48.672C54.9611 48 55.1051 47.152 55.2651 46.128C55.4251 45.088 55.4891 44.48 55.4571 44.304C55.4571 43.776 55.4491 43.352 55.4331 43.032C55.4331 42.056 55.4251 41.2 55.4091 40.464C55.3931 40.16 55.3851 39.744 55.3851 39.216C55.3851 38.72 55.4011 38.168 55.4331 37.56L55.4571 36.504C55.4571 35.992 55.5131 35.608 55.6251 35.352C55.7531 35.08 55.9291 34.944 56.1531 34.944C56.3451 34.944 56.5131 35.024 56.6571 35.184C56.8011 35.328 56.8731 35.496 56.8731 35.688C56.8731 35.896 56.8171 36.056 56.7051 36.168C56.7051 36.296 56.6891 36.512 56.6571 36.816C56.6411 37.104 56.6331 37.392 56.6331 37.68C56.6331 38.32 56.6411 38.744 56.6571 38.952V39.576L56.7051 41.688Z" fill="#FF121C" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M71.9187 26.2263C71.5269 25.7714 71.1666 25.2906 70.7446 24.8686C68.9989 23.1137 67.7067 20.9601 66.9798 18.5939C66.8236 18.1131 66.6209 17.6349 66.5332 17.1499C66.3811 16.2937 67.0593 15.4799 67.9923 15.3237C68.8787 15.1744 69.6075 15.721 69.85 16.5814C70.1504 17.6316 70.5277 18.6582 70.9789 19.653C70.7487 18.694 70.4542 17.7432 70.3062 16.7759C69.9838 14.6306 69.0512 12.6232 67.6196 10.9931C67.1593 10.4574 66.6455 9.96835 66.1386 9.47789C64.7508 8.14076 63.8932 6.46386 63.0986 4.7445C62.8575 4.23349 63.0684 3.83618 63.6247 3.73617C67.2812 3.08816 70.3651 4.08415 72.7667 6.9694C73.1599 7.43931 73.4805 7.96813 73.7764 8.38736C74.6807 8.24214 75.5575 7.97635 76.4425 7.99279C77.3275 8.00923 78.1961 8.28598 79.1948 8.4723C79.0756 7.25299 79.0195 5.95148 78.8071 4.67737C78.5948 3.40326 78.2358 2.1771 77.9235 0.934497C77.7741 0.345392 77.9961 0.0138495 78.5989 0.00151938C81.9609 -0.0710912 85.2489 2.46754 85.9353 5.74461C86.1696 6.86116 86.1942 8.02294 86.3244 9.27376C87.0934 9.4808 87.8023 9.86763 88.3926 10.4024C88.9828 10.9371 89.4375 11.6045 89.7193 12.3494C90.37 13.9852 90.1892 15.5731 89.3302 17.0965C91.129 18.3967 92.1045 20.0557 91.5222 22.2902C91.1591 23.6822 90.07 24.3877 88.6452 24.7138C89.5179 24.8343 90.3426 24.9056 91.1454 25.0714C94.0129 25.6618 96.5474 28.2416 97.0228 31.1008C97.1913 32.1283 96.5433 33.3599 95.0281 33.5531C94.9035 33.5613 94.7786 33.5613 94.654 33.5531C94.7691 34.0107 94.9472 34.434 94.9733 34.8669C95.0119 35.3426 94.8743 35.8159 94.5865 36.1966C94.2987 36.5774 93.881 36.8389 93.4128 36.9315C90.4234 37.6165 87.7369 37.0055 85.3955 34.9916C85.2859 34.8998 85.1777 34.8053 85.0653 34.7176C85.0544 34.7094 85.0297 34.7176 84.9886 34.7176C85.0996 35.4862 85.2174 36.2452 85.3202 37.0096C85.4654 38.0344 84.8735 38.8564 83.8611 38.9893C83.6133 39.0235 83.361 38.9753 83.1432 38.8523C80.2662 36.9192 78.2838 34.3313 77.3892 30.9542C77.3679 30.8808 77.3427 30.8085 77.3138 30.7377C76.7822 30.7377 76.2493 30.7706 75.7177 30.7281C75.0053 30.6761 74.4847 30.2637 74.0463 29.7239C73.8945 29.5308 73.6822 29.3942 73.4435 29.3362C69.6171 28.7512 66.9195 26.6619 65.2111 23.2273C65.0371 22.8711 64.8001 22.5423 64.6344 22.1916C64.2919 21.4436 64.9303 20.4667 65.5934 20.2667C65.7862 20.2009 65.9902 20.1746 66.1934 20.1892C66.3966 20.2039 66.5948 20.2592 66.7762 20.352C66.9576 20.4448 67.1184 20.5731 67.2492 20.7293C67.38 20.8856 67.478 21.0665 67.5374 21.2614C68.2115 23.3904 69.5226 24.9755 71.5392 25.9605C71.6954 26.0331 71.8529 26.0975 72.0091 26.1646C71.9804 26.1838 71.9488 26.2016 71.9187 26.2249V26.2263ZM64.5659 4.86917C65.3296 6.56984 66.4283 8.09909 67.7963 9.36554C69.8514 11.3069 71.0844 13.7153 71.5557 16.4978C72.1215 19.8475 73.523 22.767 75.8931 25.2111C75.9931 25.318 76.1671 25.3591 76.3562 25.4577C76.3671 25.244 76.3808 25.1371 76.3781 25.0303C76.263 22.5355 76.9672 20.2928 78.5482 18.3651C79.2579 17.4993 80.1196 16.7609 80.8772 15.9389C82.4089 14.2866 83.5501 12.3892 84.4516 10.3218C85.9353 6.93104 84.1228 2.73606 80.6155 1.57977C80.2347 1.45784 79.8401 1.38112 79.5332 1.30577C79.8072 3.18954 80.1114 5.0048 80.3306 6.83513C80.5594 8.82576 80.2936 10.7177 79.1167 12.4357C77.4932 14.8081 76.4697 17.5391 76.1342 20.3941C76.0822 20.8051 75.8369 21.0791 75.3985 21.0065C74.9601 20.9339 74.8437 20.6037 74.8999 20.1845C75.2711 17.3815 76.1507 14.7648 77.67 12.3686C78.0646 11.7411 78.3961 11.0753 78.766 10.43C78.9263 10.1492 78.8551 9.96972 78.5783 9.8108C77.1165 8.97098 75.6424 8.97099 74.1861 9.78888C73.3846 10.2382 73.1901 10.1999 72.7955 9.3587C71.931 7.52699 70.5802 6.19534 68.706 5.41169C67.4054 4.84677 65.9721 4.65924 64.57 4.87054L64.5659 4.86917ZM81.7389 29.0869C82.276 29.702 82.7596 30.2623 83.2528 30.8158C83.2943 30.8682 83.3459 30.9118 83.4045 30.944C83.463 30.9762 83.5275 30.9965 83.5939 31.0035C84.0159 30.9569 84.1926 31.2076 84.3927 31.52C84.8571 32.2475 85.29 33.0188 85.8709 33.6449C87.6122 35.5259 89.8234 36.1698 92.3346 35.8753C94.0184 35.678 94.0252 34.9286 93.1813 33.723C91.5838 31.4433 89.4233 30.4117 86.6203 30.7966C86.4093 30.824 86.0613 30.5692 85.9353 30.3527C85.7586 30.0459 85.9641 29.7568 86.2901 29.628C86.4906 29.5421 86.7032 29.488 86.9203 29.4677C88.9247 29.343 90.7564 29.8143 92.388 31.0227C92.9854 31.4652 93.6717 31.7981 94.3362 32.1434C94.7047 32.3352 95.1103 32.3598 95.4596 32.0557C95.809 31.7515 95.8295 31.3638 95.7048 30.9597C94.9609 28.4786 93.3251 26.8866 90.8166 26.2783C89.4184 25.9368 87.9591 25.9321 86.5587 26.2646C84.6995 26.6859 83.0161 27.6716 81.7389 29.0869ZM85.8284 10.4547C85.7832 10.5027 85.7476 10.5232 85.7325 10.5533C85.6818 10.6479 85.6366 10.7479 85.5955 10.8465C84.5119 13.4194 83.0117 15.7032 80.9786 17.6267C80.4925 18.0637 80.0349 18.5314 79.6086 19.0269C78.118 20.8517 77.4563 22.9437 77.6645 25.2974C77.6642 25.4344 77.7128 25.567 77.8015 25.6714C78.2564 26.0139 78.7277 26.3277 79.1044 26.5907C79.4784 25.5276 79.7798 24.3535 80.2813 23.2684C81.4225 20.7818 83.3295 19.0611 85.8983 18.124C86.6532 17.85 87.3039 17.4815 87.8382 16.891C88.8329 15.7827 89.063 14.4935 88.6356 13.1016C88.2081 11.7096 87.2395 10.8136 85.8175 10.4588L85.8284 10.4547ZM80.5361 28.4019C80.6238 28.359 80.7077 28.3085 80.7868 28.2511C81.83 27.1112 83.1047 26.2074 84.5256 25.6002C84.7045 25.5153 84.8672 25.3999 85.0064 25.259C85.973 24.3189 87.1911 23.6789 88.5137 23.4164C89.2521 23.267 89.8686 22.9287 90.2097 22.208C90.8221 20.9189 90.1111 18.9474 88.6164 18.2021C88.5137 18.1473 88.3027 18.2651 88.1588 18.3391C87.6218 18.6282 87.1258 19.0241 86.5573 19.2173C82.9089 20.4078 80.4539 24.0617 80.4279 27.8484C80.445 28.0365 80.4813 28.2224 80.5361 28.4032V28.4019ZM83.9118 37.7988C84.2639 36.7767 83.9282 35.8588 83.7282 34.9943C83.109 32.3393 81.7102 30.2212 79.1948 29.0252C78.4454 29.6212 78.3906 30.3569 78.7537 31.1816C79.1003 31.957 79.3729 32.7708 79.7785 33.5106C80.7375 35.2656 82.0979 36.6712 83.9118 37.7974V37.7988ZM76.3137 29.5527C77.4673 29.3869 78.0372 28.8115 78.081 27.6785C78.1002 27.1593 77.2727 26.6756 76.4671 26.6948C75.5849 26.7181 74.8231 27.436 74.8327 28.2416C74.8327 28.9896 75.4931 29.5691 76.3137 29.5527ZM74.0915 25.9906C73.1325 24.8617 72.0653 23.7205 71.1378 22.4793C69.9048 20.8353 69.1568 18.9488 68.6416 16.9732C68.5608 16.6759 68.3992 16.4649 68.121 16.5951C67.9662 16.6663 67.7963 17.0061 67.8388 17.1637C68.3498 19.0063 69.0896 20.749 70.2185 22.3135C71.2687 23.7702 72.5823 25.0174 74.0915 25.9906ZM73.4833 28.1141C73.5011 28.0347 73.5203 27.9552 73.5353 27.8758L73.0476 27.7771C70.635 27.2524 68.7019 26.0071 67.3977 23.889C67.0004 23.2465 66.7387 22.5259 66.3989 21.8505C66.3142 21.7051 66.201 21.5783 66.066 21.4778C66.051 21.4641 65.8715 21.5751 65.8742 21.6148C65.8977 21.7626 65.9439 21.9059 66.0112 22.0395C66.0948 22.2149 66.2167 22.3765 66.2948 22.5588C67.3826 25.0248 69.2595 26.6688 71.7351 27.6525C72.2941 27.873 72.8996 27.9648 73.4846 28.1141" fill="#FF121C" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Nav
