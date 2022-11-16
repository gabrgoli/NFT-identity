import { useEffect, useState } from "react";
import Button from "../layout/Button";
import Image from "next/image";
import styled from "styled-components";
import getConfig from "next/config";
import { http } from "../../utils/http";
import { useRouter } from "next/router";
import Modal from "../layout/Modal";
const CreateArea = styled.div`
  
`;



const CreateButton = ({title}: {title: string;}) => {
  const router = useRouter();
  const { res } = router.query;
  const alreadydone = true;
  const [array,setArray]=useState([1]);
  const [shouwUrl,setShowUrl]=useState("");
  const [DID,setDID]=useState("");
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
      console.log("social type Create Buttons",res);
      const auth = JSON.parse(localStorage.getItem("auth-methods") || "{}");
      console.log("social type Create Buttons",Object.keys(auth).length);
      if (Object.keys(auth).length == 0) {
        alreadydone = false;
      }
  }, [res]);

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  const handleCreateClick = () => {
    setArray([]);
    const aggregatedAccountData = {
      date: new Date().getTime(),
      policyID: {},
      uid: {},
      testnet: {},
      accounts: {},
    };

    const policyID = JSON.parse(localStorage.getItem("policyID") || "{}");
    aggregatedAccountData.policyID = policyID;

    const uid = JSON.parse(localStorage.getItem("uid") || "{}");
    aggregatedAccountData.uid = uid;

    const testnet = JSON.parse(localStorage.getItem("testnet") || "{}");
    aggregatedAccountData.testnet = testnet;
    
    const data =  [];
    const fromLS = JSON.parse(localStorage.getItem("auth-methods") || "{}");
    for (var element in fromLS){
        if (Object.keys(element).length > 0) {
          data.push(element, fromLS[element]);
        }
    };
    aggregatedAccountData.accounts = data;

    console.log(aggregatedAccountData);
    
    
    
    http.post(`/did/iamx`, aggregatedAccountData)
    .then((response:any) => {
      if (response.status === 200) return response.data;
      throw new Error("failed to create did");
    })
    .then((responseJson:any) => {
      console.log(responseJson);
      setArray([1,2,3]);
      
      setShowUrl(responseJson.url);
      localStorage.setItem("ipfs", responseJson.ipfs);
      localStorage.setItem("url", responseJson.url);
      
      setDID(JSON.stringify(responseJson.did));
      localStorage.setItem("did", JSON.stringify(responseJson.did));
      
      //setButtonDisable(res);
    })
    .catch((error:any) => {
    setArray([1,2,3]);
     console.log(error);
    });

    
    
    
  };



  return (

    <CreateArea>
      <button
        onClick={(res===undefined||shouwUrl!=='')?null:()=>handleCreateClick()}
        className={
          res===undefined?"disableCreateButton":
          shouwUrl!==''?"disableCreateButton":"createButton"
        }
      >
        <>
          {
            res===undefined?'To create an NFT id you should login':
            array.length===0?'loading...':title
          }
        </>
      </button>

      <a href={shouwUrl} target="_blank" rel="noreferrer">
        <button className={shouwUrl===''?<></>:"buttonLink"}>
          {shouwUrl!==''?shouwUrl:<></>}
        </button>
      </a>
      <h2 className={shouwUrl===''?"doneHidden":"done"}>You are done, this is your NFT-Identity.</h2>
      <p className={shouwUrl===''?"doneHidden":"done"}>You can close this windows.</p>
      <form>
          <textarea id="did" className={shouwUrl===''?"didtextAreahidden":"didtextArea"} value={DID} readOnly/>
      </form>
   
      
      </CreateArea>

   );
};

export default CreateButton;
