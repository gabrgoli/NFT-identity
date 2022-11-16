import { useEffect, useState } from "react";
import Button from "../layout/Button";
import Image from "next/image";
import styled from "styled-components";
import getConfig from "next/config";
import { http } from "../../utils/http";
import { useRouter } from "next/router";
import Modal from "../layout/Modal";
import Link from 'next/link'
import Axios from "axios";

const SocialArea = styled.div`
  display: flex;
  align-items: center;

  .remove-btn {
    display: inline-block;
    width: 36px;
    height: 36px;
    overflow: hidden;
  }

  .operation-area {
    margin-left: 5px;
    width: 50px;
  }

  .social-btn {
    position: relative;
    .icon-social {
      position: absolute;
      left: 24px;
    }
  }

  .link-danger {
    width: 100%;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const SocialButton = ({
  socialType,
  title,
}: {
  socialType: "twitter" | "facebook" | "github" | "instagram" | "discord" | "google" | "youtube" | "iamxid" | "linkedin" | "mailchimp" | "paypal" | "reddit" | "snapchat" | "twitch" | "apple" | "steam" | "microsoft" | "tiktok"| "outlook"| "stripe"| "local"| "local2";
  title: string;
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [authProviders, setAuthProviders] = useState<any>();
  const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);

  const router = useRouter();
  const { res } = router.query;


  useEffect(() => {
    if (res === socialType) {
      console.log("social type",res);
    }
  }, [res, socialType]);

  const setUserNewAuthProvider = (newAuthProvider: any) => {
    const fromLS = JSON.parse(localStorage.getItem("auth-methods") || "{}");
    setAuthProviders({ ...fromLS, ...newAuthProvider });
  };

  const removeUserAuthProvider = () => {
    const fromLS = JSON.parse(localStorage.getItem("auth-methods") || "{}");
    delete fromLS[socialType];
    localStorage.setItem("auth-methods", JSON.stringify(fromLS));
    setAuthProviders({ ...fromLS });
  };

  useEffect(() => {
    if (authProviders) {
      localStorage.setItem("auth-methods", JSON.stringify(authProviders));
      setAuthenticated(authProviders[socialType] !== undefined);
    }
  }, [authProviders, socialType]);

  useEffect(() => {
    setAuthProviders({
      ...JSON.parse(localStorage.getItem("auth-methods") || "{}"),
    });

    http
      .get(`/auth/${socialType}`)
      .then((response) => {
        if (response.status === 200) return response.data;
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        //console.log(responseJson.user);
        setUserNewAuthProvider(responseJson.user);
      })
      .catch((error) => {
        setAuthenticated(false);
      });
  }, [socialType]);

  const handleSignInClick = () => {
     if(socialType==='local'){

      Axios({
        method: "POST",
        data: {
          username: 'saSDASA',
          password: 'ASADDAD',
        },
        withCredentials: true,
        url: "https://nftidentityservice.iamx.id/auth/local/login",
      }).then((res) => console.log(res));
    }else{
    //   router.push('/LoginKYC')
    // }els{
      window.open(
        `${process.env.NEXT_PUBLIC_AUTH_HOST_URL}/auth/${socialType}/login`,
        "_self"
      );
    //}
    }
  };

  const clickOnRemove = () => setShowRemoveModal(!showRemoveModal);

  const handleLogoutClick = () => {
    removeUserAuthProvider();
    window.open(
      `${process.env.NEXT_PUBLIC_AUTH_HOST_URL}/auth/${socialType}/logout`,
      "_self"
    );
    //this.props.handleNotAuthenticated();
  };

  return (
    <SocialArea>
      <Button
        variant="social"
        socialType={socialType}
        onClick={handleSignInClick}
        className="social-btn"
        disabled={authenticated}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="icon-social"
          src={`/images/social/icons/${socialType}.png`}
          width={20}
          alt="Connected icon"
        />
        {authenticated ? (
          <>
            <span className="mr-1 text1">{authProviders[socialType].displayName!=undefined?authProviders[socialType].displayName:authProviders[socialType].username!=undefined?authProviders[socialType].username:'Connected'}</span>{" "}
            <Image
              src="/images/icons/check.png"
              width={20}
              height={20}
              alt="Connected icon"
            />
          </>
        ) : (
          <>{title}</>
        )}
      </Button>
      <div className="operation-area">
        {authenticated && (
          <div style={{ position: "relative" }}>
            <Button
              small
              variant="icon"
              onClick={clickOnRemove}
              className="remove-btn"
            >
              <Image
                src="/images/icons/trash.png"
                width={12}
                height={12}
                alt={`Remove ${title} credentials`}
              />
            </Button>
            <Modal
              opened={showRemoveModal}
              handleClosing={() => setShowRemoveModal(false)}
            >
              <h2>Are you sure?</h2>
              <button
                className="link-danger mt-3 mb-0"
                onClick={handleLogoutClick}
              >
                Remove
              </button>
            </Modal>
          </div>
        )}
      </div>
    </SocialArea>
  );
};

export default SocialButton;
