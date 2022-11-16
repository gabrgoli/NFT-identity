import type { NextPage } from "next";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import SocialButton from "../components/social/SocialButton";
import CreateButton from "../components/social/CreateButton";
import styles from "../styles/Home.module.scss";
import { scrollToElement } from "../utils/layout";
//import Loader from 'react-loader-spinner';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Form from '../components/form'
const Home: NextPage = () => {
  let { query } = useRouter();
  useEffect(() => {
    console.log("policyid", query.policyid);
    if (query.policyid) {
      localStorage.setItem("policyID", JSON.stringify(query.policyid));
    }
    if (query.uid) {
      localStorage.setItem("uid", JSON.stringify(query.uid));
    }
    if (query.testnet) {
      localStorage.setItem("testnet", JSON.stringify(query.testnet));
    }
  });

  return (

    //<Layout title="IAMX - NFT Identity" className={`${styles.backgroundSecondary}`}>
       <Layout title="IAMX - NFT Identity">
      <Header />
      <div className={styles.pageBody}>
        <section className="section">
          <div className={`container ${styles.hero}`}>
            <div className={styles.heroInfo}>
              <h1 className={`${styles.heroText} ${styles.titleText}`}>
                Create your NFT Identity.<br></br>
              </h1>
              <div className={styles.itemDescription}>
                <p>
                  By creating your NFT Identity you can verify
                  your identity and prove creative ownership over NFT within seconds -
                  and you always stay in control of your data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container not-full">
          <p className={styles.benefitsTitle}>Your benefits at a glance</p>
          <ul className={styles.benefitsList}>
            <li><button className={styles.one}>Verify creator</button></li>
            <li><button className={styles.two}>Prove authenticity</button></li>
            <li><button className={styles.three}>Protect value</button></li>
            <li><button className={styles.four}>Visible in any wallet</button></li><br />
            <li><button className={styles.five}>Visible in any NFT Marketplace</button></li>
            <li><button className={styles.six}>Reduce fraud to zero</button></li>
            <li><button className={styles.seven}>Increase the second market revenues</button></li>
          </ul>
        </section>

        <section className="section" id="view-get-started">
          <div className="container">
            <div className="inner-content">
              <div className={styles.item}>
                <h3 className={styles.itemNumber}>01</h3>
                <div>
                  <h2 className={styles.titleText}>Connect your accounts.</h2>
                  <p className={styles.itemDescription}>
                    Sign in into all of your social media accounts - IAMX will verify that you are the owner of the accounts and add them to your ID.<br />
                    You can choose which services you want to grant access to selected accounts.<br />
                    If you need support, please contact: <a href={`mailto:did@iamx.id`} className={styles.mailLink}>did@iamx.id</a>
                  </p>
                  <div className={styles.socialButtons}>
                    <div className={styles.gridItem}><SocialButton socialType="twitter" title="Twitter" /></div>
                    <div className={styles.gridItem}><SocialButton socialType="facebook" title="Facebook" /></div>
                    <div className={styles.gridItem}><SocialButton socialType="discord" title="Discord" /></div>
                    <div className={styles.gridItem}><SocialButton socialType="github" title="GitHub" /></div>
                    <div className={styles.gridItem}><SocialButton socialType="apple" title="Apple" /></div >
                    <div className={styles.gridItem}><SocialButton socialType="linkedin" title="LinkedIn" /></div >
                    <div className={styles.gridItem}><SocialButton socialType="twitch" title="Twitch" /></div >
                    <div className={styles.gridItem}><SocialButton socialType="google" title="Google" /></div >
                    <div className={styles.gridItem}><SocialButton socialType="local2" title="IAMX" /></div >

                    <div className={styles.showArea}>
                      <input type={'checkbox'} id={'showMore'} className={styles.checkbox} />
                      <div className={styles.showMore}>
                        
                        <div className={styles.gridItemdisabled}><SocialButton socialType="tiktok" title="TikTok" /></div >
                        <div className={styles.gridItemdisabled}><SocialButton socialType="instagram" title="Instagram" /></div>
                        <div className={styles.gridItemdisabled}><SocialButton socialType="paypal" title="PayPal" /></div >
                        <div className={styles.gridItemdisabled}><SocialButton socialType="youtube" title="Youtube" /></div>
                        <div className={styles.gridItemdisabled}><SocialButton socialType="mailchimp" title="MailChimp" /></div >
                        <div className={styles.gridItemdisabled}><SocialButton socialType="microsoft" title="Microsoft" /></div >
                        <div className={styles.gridItemdisabled}><SocialButton socialType="outlook" title="Outlook" /></div >
                        <div className={styles.gridItemdisabled}><SocialButton socialType="reddit" title="Reddit" /></div >
                        <div className={styles.gridItemdisabled}><SocialButton socialType="snapchat" title="Snapchat" /></div >
                        <div className={styles.gridItem}><SocialButton socialType="steam" title="Steam" /></div >
                        <div className={styles.gridItemdisabled}><SocialButton socialType="stripe" title="Stripe" /></div >
                      </div>

                      <label htmlFor={'showMore'}>
                        <div className={styles.dividerMore}>
                          <hr width={`1155px`} />
                          <b>Show all &or;</b>
                        </div>
                        <div className={styles.dividerLess}>
                          <hr width={`1155px`} />
                          <b>Show less &and;</b>
                        </div>
                      </label>
                    </div>
                  </div >
                </div >
              </div >


              <div className={styles.item}>
                <h3 className={styles.itemNumber}>02</h3>
                <div>
                  <h2 className={styles.titleText}>Choose DID-method.</h2>
                  <p className={styles.itemDescription}>
                    Please choose the secure storage of your decentralized identifier (DID). IAMX will soon support a larger variety of DID methods to choose from.<br />
                    <select id="storage" name="storage" className={styles.storageSelect} defaultValue="IAMX:ipfs">
                      <option value="IAMX:ipfs">DID:IAMX InterPlanetary File System (IPFS)</option>
                      <option value="IAMX:btc" disabled>DID:IAMX Bitcoin (BTC)</option>
                      <option value="IAMX:cardano" disabled>DID:IAMX Cardano (ADA)</option>
                      <option value="IAMX:ergo" disabled>DID:IAMX ERGO (ERG)</option>
                      <option value="IAMX:eth" disabled>DID:IAMX Ethereum (ETH)</option>
                      <option value="IAMX:fatcom" disabled>DID:IAMX Fatcom (FCT)</option>
                      <option value="IAMX:hypl" disabled>DID:IAMX Hyperledger Fabric</option>
                      <option value="IAMX:iota" disabled>DID:IAMX IOTA (MIOTA)</option>
                      <option value="IAMX:poly" disabled>DID:IAMX Polygon (MATIC)</option>
                      <option value="IAMX:sol" disabled>DID:IAMX Solana (SOL)</option>
                      <option value="IAMX:sovrin" disabled>DID:IAMX Sovrin</option>
                      <option value="IAMX:web" disabled>DID:IAMX Web (www)</option>
                    </select>
                  </p>
                </div>
              </div>


              <div className={styles.item}>
                <h3 className={styles.itemNumber}>03</h3>
                <div>
                  <h2 className={styles.titleText}>Create NFT Identity.</h2>
                  <p className={styles.itemDescription}>
                    Proceed with this step, after logging in successful to the maximum of accounts above.
                    In this step you create a decentralized identifier (DID).
                  </p>
                  <p className={`${styles.itemDescription} ${styles.gray}`}>
                    The DID (JSON LD) proves, that you have successfully logged in to a certain number of accounts.
                    This increases the trust of the purchaser of the NFT, that the NFT is real and that the creator is verified.
                  </p>
                  <CreateButton title="Create" />
                </div>
                <Form/>
              </div>







            </div >
          </div >
        </section >
        <section className="section" id="view-learn-more">
          <div className={`container`}>
            <h1 className={`${styles.titleText} mb-6`}>Good to know.</h1>

            <div className={styles.item}>
              <div>
                <input type={'checkbox'} id={'showNFT'} className={styles.checkboxNFT} />
                <label htmlFor={`showNFT`}><div className={styles.inline}><h2 className={styles.titleText}>NFT</h2><img src={`/images/icons/arrow_black.png`} className={styles.img1} /><img src={`/images/icons/close_black.png`} className={styles.img2} /></div></label>
                <p className={`${styles.itemDescription} ${styles.NFT}`}>
                  A non-fungible token (NFT) is a tradable financial security consisting of digital data stored in a blockchain, a form of distributed ledger.
                  The ownership of an NFT is recorded in the blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded.
                  NFTs assets are art, big sports moments, domain names, continuous obligations, game objects, intellectual property, memberships and subscriptions, memes, music, real estate, redeemables physical usage, software, trading cards / collectibles, videos, virtual fashion.
                  Because NFTs are uniquely identifiable, they differ from cryptocurrencies, which are fungible.
                </p>
              </div>
              <hr width={`1155px`} />
            </div>
            <div className={styles.item}>
              <div>
                <input type={'checkbox'} id={'showNFTIdentity'} className={styles.checkboxNFTIdentity} />
                <label htmlFor={`showNFTIdentity`}><div className={styles.inline}><h2 className={styles.titleText}>IAMX NFT Identity</h2><img src={`/images/icons/arrow_black.png`} className={styles.img1} /><img src={`/images/icons/close_black.png`} className={styles.img2} /></div></label>
                <p className={`${styles.itemDescription} ${styles.NFTIdentity}`}>
                  NFT Identity adds the layer of identity verification to NFT with the benefits: verify creator, prove authenticity, protect the value, visible in any wallet and reduce fraud to zero.
                  The creator of the NFT successfully logs in to all or selected of the following accounts: Apple, Discord, Facebook, Github, Google, Instagram, Linkedin, MailChimp, Microsoft, Outlook, PayPal, Reddit, Snapchat, Steam, Stripe, TikTok, Twitch, Twitter, Youtube.
                  The creator of the NFT can additionally complete IAMX Identity as a person using KYC (Know-Your-Customer) or as an entity using KYB (Know-Your-Business). Both methods are fully compliant with General Data Protection Regulation (GDPR) and Anti Money Laundering (AML).
                  The purchaser of the NFT can check in which accounts and under which username the creator has successfully logged in and if the creator has been verified via IAMX Identity.
                  The NFT identity check works with policy id, DID method, pointer reference / source and asset ID.
                </p>
              </div>
              <hr width={`1155px`} />
            </div>
            <div className={styles.item}>
              <div>
                <input type={'checkbox'} id={'showNFTRights'} className={styles.checkboxNFTRights} />
                <label htmlFor={`showNFTRights`}><div className={styles.inline}><h2 className={styles.titleText}>IAMX NFT Rights</h2><img src={`/images/icons/arrow_black.png`} className={styles.img1} /><img src={`/images/icons/close_black.png`} className={styles.img2} /></div></label>
                <p className={`${styles.itemDescription} ${styles.NFTRights}`}>
                  IAMX NFT Rights add selected copyrights, intellectual property rights and other rights to any NFT such as the right types commercial / non-commercial usage, buyout types, geographical, media, editing, connection, duplication and more rights.
                  Without IAMX NFT Rights, the purchaser just purchases the NFT with the simple right of usage for the owner.
                  When a NFT is sold, the purchaser of the NFT becomes the owner.
                  The creator still remains the author of the work. Copyright cannot, in principle, be sold.
                  The creator can grant a third party certain rights with the NFT.
                </p>
              </div>
              <hr width={`1155px`} />
            </div>
            <div className={styles.item}>
              <div>
                <input type={'checkbox'} id={'showNFTAnchor'} className={styles.checkboxNFTAnchor} />
                <label htmlFor={`showNFTAnchor`}><div className={styles.inline}><h2 className={styles.titleText}>IAMX NFT Anchor</h2><img src={`/images/icons/arrow_black.png`} className={styles.img1} /><img src={`/images/icons/close_black.png`} className={styles.img2} /></div></label>
                <p className={`${styles.itemDescription} ${styles.NFTAnchor}`}>
                  The IAMX NFT Anchor ensures enforceable, legally binding NFT Rights by connecting to a physical world anchor in the form of a legal entity / DAO fulfilling this purpose.
                </p>
              </div>
              <hr width={`1155px`} />
            </div>
            <div className={styles.item}>
              <div>
                <input type={'checkbox'} id={'showDID'} className={styles.checkboxDID} />
                <label htmlFor={'showDID'}><div className={styles.inline}><h2 className={styles.titleText}>DID</h2><img src={`/images/icons/arrow_black.png`} className={styles.img1} /><img src={`/images/icons/close_black.png`} className={styles.img2} /></div></label>
                <p className={`${styles.itemDescription} ${styles.did}`}>
                  A decentralized identifier (DID) is a globally unique, persistent, machine-friendly, resolvable, cryptographically verifiable decentral identifier for storage of verifiable credential container sets, fully in control of the holder.
                  The DID is the address of a public key on a blockchain or another decentralized network. The verifier can verify the signature of the holder / issuer using the holder's public key.
                  The DID identifies resources that are not on the web such as people, organizations, assets and anything that can be identified by providing metadata information that represents this resource.
                </p>
              </div>
              <hr width={`1155px`} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Layout >

  );
};


export default Home;
