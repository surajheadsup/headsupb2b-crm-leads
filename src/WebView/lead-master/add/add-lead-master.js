import React, { useEffect } from "react";
import CustomInput from "../../../Component/ui/form/input/custom-input";
import { useDispatch, useSelector } from "react-redux";
import { setLeadMasterApiJson } from "../../../Store/Action/master/lead-master/lead-master-action";
import { Button, Title } from "rizzui";
import CustomSwitch from "../../../Component/ui/form/switch/custom-switch";
import MySelect from "../../../Component/ui/form/select/MySelect";
import CustomButton from "../../../Component/ui/form/button/custom-button";
import { useParams } from "react-router-dom";
import { apiHit } from "../../../Store/Action/Api/MyApi";
import toast from "react-hot-toast";
import { addLead, getLead, updateLead } from "../../../Constant/Api/Api";

function AddLead() {
  const dispatch = useDispatch()
  const reduxLead = useSelector(state => state.LeadMaster)

  const Id = useParams().Id
  console.log('id', Id);

  useEffect(() => {

    if (Id) {
      const json = {
        page: 1,
        limit: 50,
        search: {
          _id: Id
        }
      }
      apiHit(json, getLead).then((result) => {
        console.log(result);
        dispatch(setLeadMasterApiJson(result.doc.docs[0]))
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reduxProject.apiJson", reduxLead.apiJson);

    const api = Id ? updateLead : addLead

    apiHit(reduxLead.apiJson, api).then((result) => {
      toast("Career Aadded ")
      console.log(result);
    }).catch((err) => {
      console.log(err);
      toast("Error ")
    })
  }

  console.log('reduxLead', reduxLead.apiJson);




  return <div className='p-10'>
    <form onSubmit={handleSubmit}>
      <div className="space-y-5 lg:space-y-6 ">

        <div className='mb-4'><Title as='h4'>Lead Genration</Title></div>
        <div className="grid grid-cols-4 gap-4">
          {/* <CustomInput important={true} name="leadSource" label="Lead Source" value={reduxLead?.apiJson?.leadSource} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="leadSource" label="Lead Source" type="leadSource" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />

          <CustomInput important={true} name="companyName" label="Company Name" value={reduxLead?.apiJson?.companyName} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomInput important={true} name="industry" label="Industry" value={reduxLead?.apiJson?.industry} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="industry" label="Industry" type="industry" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomInput important={true} name="companySize" label="Company Size" value={reduxLead?.apiJson?.companySize} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="companySize" label="Company Size" type="companySize" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomInput important={true} name="leadStatus" label="Lead Status" value={reduxLead?.apiJson?.leadStatus} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="leadStatus" label="Lead Status" type="leadStatus" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
        </div>
        <div className='mb-4'><Title as='h4'>Contact Details</Title></div>
        <div className="grid grid-cols-4 gap-4">

          <CustomInput important={true} name="contactJobTitle" label="Contact Job Title" value={reduxLead?.apiJson?.contactJobTitle} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="contactPhoneNumber" label="Contact Phone Number" value={reduxLead?.apiJson?.contactPhoneNumber} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="contactEmail" label="Contact Email" value={reduxLead?.apiJson?.contactEmail} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="contactAddress" label="Contact Address" value={reduxLead?.apiJson?.contactAddress} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
        </div >
        <div className='mb-4'><Title as='h4'>Contact Address</Title></div>
        <div className="grid grid-cols-4 gap-4">
          <CustomInput important={true} name="leadScore" type="Number" label="Lead Score" value={reduxLead?.apiJson?.leadScore} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomInput important={true} name="priorityLevel" label="Priority Level" value={reduxLead?.apiJson?.priorityLevel} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="priorityLevel" label="Priority Level" type="priorityLevel" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="budget" type="Number" label="Budget" value={reduxLead?.apiJson?.budget} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomInput important={true} name="decisionMaker" label="decisionMaker" value={reduxLead?.apiJson?.decisionMaker} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <CustomSwitch name="decisionMaker" label={'decisionMaker'} position={'top'} value={reduxLead?.apiJson?.decisionMaker} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
        </div>
        <div className='mb-4'><Title as='h4'>Interraction History</Title></div>
        <div className="grid grid-cols-4 gap-4">
          <CustomInput important={true} name="firstContactDate" type="Date" label="First Contact Date" value={reduxLead?.apiJson?.firstContactDate} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="lastContactDate" type="Date" label="Last Contact Date" value={reduxLead?.apiJson?.lastContactDate} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomInput important={true} name="interactionType" label="Interaction Type" value={reduxLead?.apiJson?.interactionType} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="interactionType" label="Interaction Type" type="interactionType" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="notes" label="Notes" value={reduxLead?.apiJson?.notes} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
        </div>
        <div className='mb-4'><Title as='h4'>Sales Funnel</Title></div>
        <div className="grid grid-cols-4 gap-4">
          <CustomInput important={true} name="leadStage" label="Lead Stage" value={reduxLead?.apiJson?.leadStage} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <MySelect name="leadStage" label="Lead Stage" type="leadStage" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="nextAction" label="Next Action" value={reduxLead?.apiJson?.nextAction} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="nextActionDate" type="Date" label="Next Action Date" value={reduxLead?.apiJson?.nextActionDate} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
        </div>
        <div className='mb-4'><Title as='h4'>Follow-up Tracking</Title></div>
        <div className="grid grid-cols-4 gap-4">
          {/* <CustomInput important={true} name="followUpScheduled" label="followUpScheduled" value={reduxLead?.apiJson?.followUpScheduled} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <CustomSwitch name="followUpScheduled" label={'Follow Up Scheduled'} position={'top'} value={reduxLead?.apiJson?.followUpScheduled} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="followUpDate" type="Date" label="Follow UpDate" value={reduxLead?.apiJson?.followUpDate} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="followUpNotes" label="Follow UpNotes" value={reduxLead?.apiJson?.followUpNotes} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
        </div>
        <div className='mb-4'><Title as='h4'>Conversion Details</Title></div>
        <div className="grid grid-cols-4 gap-4">
          <CustomSwitch name="converted" label={'Converted'} position={'top'} value={reduxLead?.apiJson?.converted} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="conversionDate" type="Date" label="Conversion Date" value={reduxLead?.apiJson?.conversionDate} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomInput important={true} name="conversionType" label="Conversion Type" value={reduxLead?.apiJson?.conversionType} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="conversionType" label="Conversion Type" type="conversionType" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
        </div>
        <div className='mb-4'><Title as='h4'>Disqualified or Dormant Lead Fields</Title></div>
        <div className="grid grid-cols-4 gap-4">
          <CustomInput important={true} name="disqualificationReason" label="Disqualification Reason" value={reduxLead?.apiJson?.disqualificationReason} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomSwitch name="reEngagementPotential" label={'Re Engagement Potential'} position={'top'} value={reduxLead?.apiJson?.reEngagementPotential} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="reEngagementPotential" label="Re Engagement Potential" type="reEngagementPotential" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          <CustomInput important={true} name="lastActivityDate" type="Date" label="Last Activity Date" value={reduxLead?.apiJson?.lastActivityDate} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
          {/* <CustomInput important={true} name="conclusion" label="Conclusion" value={reduxLead?.apiJson?.conclusion} reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} /> */}
          <MySelect name="conclusion" label="Conclusion" type="conclusion" reduxState={reduxLead?.apiJson} setAction={setLeadMasterApiJson} />
        </div>
       <div className="flex justify-center">
            <CustomButton title={Id ? "Update" : "Add"} type="Submit" />
          </div>
      </div>
    </form>
  </div>
}

export default AddLead;
