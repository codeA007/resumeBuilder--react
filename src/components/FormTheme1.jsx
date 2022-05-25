import React, { useState, useRef, useEffect } from 'react';
import '../styles/form1Styles.css';
import Theme1 from '../themes/Theme1';
import BottomNavbar from './BottomNavbar';
import Navbar from './Navbar';
import WarningPage from './WarningPage';

export default function FormTheme1() {
  const [warning, setWarning] = useState(false);
  // const { height, width } = useWindowDimensions();
  const width = window.innerWidth;
  useEffect(() => {
    // let width = window.innerWidth;
    if (width <= 900) {
      setWarning(true);
    }
  }, [])
  const [show, setShow] = useState(true);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState();
  const [skipA, setSkipA] = useState(false);
  const [skipC, setSkipC] = useState(false);
  const [part1, setPart1] = useState(
    {
      fullName: '',
      branch: '',
      email: '',
      linkedIn: '',
      contactNumber: ''
    }
  )
  const [part2, setPart2] = useState(
    {
      collegeName: '',
      collegeCGPA: '',
      activeYears: '',
      class12thCollegeName: '',
      class12thPercentage: '',
      class12thPassOut: '',
      class10thCollegeName: '',
      class10thPercentage: '',
      class10thPassOut: '',
    }
  )
  const [part3, setPart3] = useState(
    {
      programingSkills: '',
      tools: '',
      softSkills: ''
    }
  )
  const [part4, setPart4] = useState(
    {
      project1Title: '',
      project1Team: '',
      project1Desc: '',
      project2Title: '',
      project2Team: '',
      project2Desc: '',
      project3Title: '',
      project3Team: '',
      project3Desc: '',
    }
  )
  const [part5, setPart5] = useState({
    intrests: '',
    languages: ''
  })
  const [part6, setPart6] = useState(
    {
      cer1: '',
      cer2: '',
      cer3: ''
    }
  )
  const [part7, setPart7] = useState(
    {
      ach1: '',
      ach2: '',
      ach3: ''
    }
  )
  const inputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      }
      console.log(preview);
      reader.readAsDataURL(image);
    }
    else {
      setPreview(null);
    }
  }, [image])

  const { collegeName, collegeCGPA, activeYears, class12thCollegeName, class12thPercentage, class12thPassOut, class10thCollegeName, class10thPercentage, class10thPassOut } = part2;

  const { programingSkills, tools, softSkills } = part3;

  const { project1Title, project1Team, project1Desc, project2Title, project2Team, project2Desc, project3Title, project3Team, project3Desc } = part4;

  const { intrests, languages } = part5;

  const { cer1, cer2, cer3 } = part6;

  const { ach1, ach2, ach3 } = part7;

  const onSubmit = () => {
    setShow(false);
  }
  const chooseImg = () => {
    inputRef.current.click();
  }
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPart1({ ...part1, [name]: value });
  }
  const onChangePart2 = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPart2({ ...part2, [name]: value });
    setPart3({ ...part3, [name]: value });
    setPart4({ ...part4, [name]: value });
    setPart5({ ...part5, [name]: value });
    setPart6({ ...part6, [name]: value });
    setPart7({ ...part7, [name]: value });
  }


  return (
    <>
      {(warning) ? <WarningPage /> : ''}
      {(!warning) ? <Navbar /> : ''}
      {(show == false) ? <Theme1 skipA={skipA} skipC={skipC} editMode={(edit) => setShow(edit)} image={preview} part1={part1} part2={part2} part3={part3} part4={part4} part5={part5} part6={part6} part7={part7} /> : ''}
      <div className="formContainer" style={{ 'display': (show && warning == false) ? 'block' : 'none' }}>
        <div className="containerPart1">
          <div className="part1">
            <h2>User Details</h2>
            <img style={{ 'cursor': 'pointer' }} src={(preview != null) ? preview : "https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1019597599.jpg"} alt="" onClick={chooseImg} />
            <input type="file" name="image" id="" style={{ 'display': 'none' }}
              ref={inputRef}
              accept='image/*'
              onChange={(e) => {
                const file = e.target.files[0];
                if (file && file.type.substr(0, 5) === 'image') {
                  setImage(file)
                  // onChange();
                }
                else {
                  setImage(null)
                }
              }} />
            <div className="part1Details">
              <label htmlFor="">Full Name</label>
              <input name="fullName" value={part1.fullName} onChange={onChange} type="text" placeholder='full name' style={{ 'width': '200px' }} />
              <label htmlFor="">Branch Name</label>
              <input type="text" name="branch" value={part1.branch} onChange={onChange} Placeholder="Ex:Computer Science" />
              <label htmlFor="">Email</label>
              <input type="text" name="email" value={part1.email} onChange={onChange} placeholder='Ex: test123@test.com' />
              <label htmlFor="">Linked In</label>
              <input type="text" name="linkedIn" value={part1.linkedIn} onChange={onChange} placeholder="Ex:www.linkedIn.com/user_name" />
              <label htmlFor="">Contact Number</label>
              <input type="text" name="contactNumber" value={part1.contactNumber} onChange={onChange} placeholder="+91000000000" style={{ 'width': '120px' }} />
            </div>
          </div>
          <div className="part2" style={{ 'display': 'block' }}>
            <h2>Education</h2>
            <label htmlFor="">College Name</label>
            <input type="text" Placeholder="Ex:KLE Technological university" name='collegeName' value={collegeName} onChange={onChangePart2} />
            <label htmlFor="">CGPA(B.E)</label>
            <input type="text" onChange={onChangePart2} name='collegeCGPA' value={collegeCGPA} Placeholder="Ex:7.8" style={{ 'width': '90px' }} />
            <label htmlFor="">B.E(active years)</label>
            <input type="text" onChange={onChangePart2} name='activeYears' value={activeYears} Placeholder="Ex:Aug2018-2022" />
            <label htmlFor="">Class 12th(College Name)</label>
            <input name='class12thCollegeName' onChange={onChangePart2} value={class12thCollegeName} type="text" Placeholder="Ex:Vidyaniketan" />
            <label htmlFor="">percentage(Class 12th)</label>
            <input type="text" onChange={onChangePart2} name='class12thPercentage' value={class12thPercentage} Placeholder="Ex:65%" style={{ 'width': '90px' }} />
            <label htmlFor="">Class 12th(passout year)</label>
            <input type="text" onChange={onChangePart2} name='class12thPassOut' value={class12thPassOut} Placeholder="Ex:Aug2018" />
            <label htmlFor="">Class 10th(School Name)</label>
            <input type="text" onChange={onChangePart2} name='class10thCollegeName' value={class10thCollegeName} Placeholder="Ex:Vidyaniketan" />
            <label htmlFor="">percentage(Class 10th)</label>
            <input type="text" onChange={onChangePart2} name='class10thPercentage' value={class10thPercentage} Placeholder="Ex:85%" />
            <label htmlFor="">Class 10th(passout year)</label>
            <input type="text" onChange={onChangePart2} name='class10thPassOut' value={class10thPassOut} Placeholder="Ex:Aug2016" />
          </div>
          <div className="part3">
            <h2>Skills</h2>
            <label htmlFor="">Programing Skills</label>
            <textarea onChange={onChangePart2} value={programingSkills} name="programingSkills" placeholder='Ex:C, C++(Object OrientedLanguage), Basics of Data Structures, Assembly' id="" cols="30" rows="4"></textarea>
            <label htmlFor="">Tools</label>
            <textarea onChange={onChangePart2} name="tools" value={tools} placeholder='Ex:Keil, Cadence, Proteus, Wordpress,Basics of MATLAB
           Assembly' id="" cols="30" rows="4"></textarea>
            <label htmlFor="">Soft Skills</label>
            <textarea onChange={onChangePart2} name="softSkills" value={softSkills} placeholder='Ex:Good Organizer, Leadership, Adaptability, Problem Solving,Quick Learner, Good Listener
          ' id="" cols="30" rows="4"></textarea>
          </div>
          <div className="part4">
            <h2>Projects</h2>
            <label htmlFor="">Title(project-1)</label>
            <input type="text" placeholder="Ex:project title" name="project1Title" value={project1Title} onChange={onChangePart2} />
            <label htmlFor="">Team Size</label>
            <input type="text" placeholder="Ex:4" name="project1Team" value={project1Team} onChange={onChangePart2} />
            <label htmlFor="">Description</label>
            <textarea name="project1Desc" value={project1Desc} onChange={onChangePart2} style={{ 'width': '500px' }} id="" cols="30" rows="6"></textarea>
            <label htmlFor="">Title(project-2)</label>
            <input type="text" placeholder="Ex:project title" name="project2Title" value={project2Title} onChange={onChangePart2} />
            <label htmlFor="">Team Size</label>
            <input type="text" placeholder="Ex:4" name="project2Team" value={project2Team} onChange={onChangePart2} />
            <label htmlFor="">Description</label>
            <textarea name="project2Desc" value={project2Desc} onChange={onChangePart2} style={{ 'width': '500px' }} id="" cols="30" rows="6"></textarea>
            <label htmlFor="">Title(project-3)</label>
            <input type="text" placeholder="Ex:project title" name="project3Title" value={project3Title} onChange={onChangePart2} />
            <label htmlFor="">Team Size</label>
            <input type="text" placeholder="Ex:4" name="project3Team" value={project3Team} onChange={onChangePart2} />
            <label htmlFor="">Description</label>
            <textarea name="project3Desc" value={project3Desc} onChange={onChangePart2} style={{ 'width': '500px' }} id="" cols="30" rows="6"></textarea>
          </div>
          <div className="part5">
            <h2>Genral</h2>
            <label htmlFor="">Intrests</label>
            <textarea value={intrests} name="intrests" onChange={onChangePart2} id="" cols="30" rows="6" placeholder="Digital Electronics, Computer Networks, RTOS Blogging, SEO,"></textarea>
            <label htmlFor="">Languages</label>
            <input name="languages" value={languages} onChange={onChangePart2} type="text" placeholder='Ex:Kannada,Hindi' />
          </div>
          <div style={{ 'display': (skipC) ? 'none' : 'block' }} className="part6">
            <h2>Certificates</h2>
            <label htmlFor="">certifcate-1(Name)</label>
            <input type="text" name="cer1" value={cer1} onChange={onChangePart2} placeholder="" />
            <label htmlFor="">certifcate-2(Name)</label>
            <input type="text" name="cer2" value={cer2} onChange={onChangePart2} placeholder="" />
            <label htmlFor="">certifcate-3(Name)</label>
            <input type="text" name="cer3" value={cer3} onChange={onChangePart2} placeholder="" />
          </div>
          <div style={{ 'display': (skipA) ? 'none' : 'block' }} className="part7">
            <h2>Achivements</h2>
            <label htmlFor="">Achivement -1</label>
            <input type="text" name="ach1" value={ach1} onChange={onChangePart2} placeholder='' style={{ 'width': '500px' }} />
            <label htmlFor="">Achivement -2</label>
            <input type="text" name="ach2" value={ach2} onChange={onChangePart2} placeholder='' style={{ 'width': '500px' }} />
            <label htmlFor="">Achivement -3</label>
            <input type="text" name="ach3" value={ach3} onChange={onChangePart2} placeholder='' style={{ 'width': '500px' }} />
          </div>
          <button className="submit" onClick={onSubmit}>Submit</button>
          <button className="skip" onClick={() => setSkipA(!skipA)}>{(skipA) ? "show Achivements" : "Skip Achivements"}</button>
          <button className="skip" onClick={() => setSkipC(!skipC)}>{(skipC) ? "show Certificates" : "Skip certificates"}</button>
        </div>
      </div>
      <BottomNavbar />
    </>
  )
}
