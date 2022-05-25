import React, { useRef, useState } from 'react';
import '../styles/theme1Styles.css';
import { jsPDF } from "jspdf";
import ReactToPrint from 'react-to-print';
import FormTheme1 from '../components/FormTheme1';
import Navbar from '../components/Navbar';



export default function Theme1(props) {

    const generatePDF = () => {
        let doc = new jsPDF("p", "pt", "a4");
        doc.html(document.getElementsByClassName("styleContainer")[0], {
            callback: function (pdf) {
                pdf.save("mypdf.pdf")
            }
        })
    };
    const componentRef = useRef();
    // console.log(props.part1.image);
    return (
        <>
            <div className='mainContainer'>
                <div ref={componentRef} className="styleContainer">
                    <div className="themeContainer">
                        <div className="userDetails">
                            <div className="userdetails2">
                                <h1>{(props.part1.fullName !== '') ? props.part1.fullName : "Full Name"}</h1>
                                <p>{(props.part1.branch !== '') ? props.part1.branch : "Your Branch Name"}</p>
                            </div>
                            <img src={(props.image != null) ? props.image : "https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1019597599.jpg"} alt="" />
                        </div>
                        <div className="userContacts">
                            <div className="email">
                                <i class="fa-solid fa-envelope"></i>
                                <p>{(props.part1.email !== '') ? props.part1.email : 'test@test.com'}</p>
                            </div>
                            <div className="linkedIn">
                                <i class="fa-brands fa-linkedin"></i>
                                <a target="_blank" href={props.part1.linkedIn}>{(props.part1.linkedIn !== '') ? props.part1.linkedIn : "LinkedIn Link"}</a>
                            </div>
                            <div className="contactNo">
                                <i class="fa-solid fa-square-phone"></i>
                                <p>{(props.part1.contactNumber !== '') ? props.part1.contactNumber : 'contactNo'}</p>
                            </div>
                        </div>
                        <div className="userDetails3">
                            <div className="education">
                                <h2 className=" heading">Education</h2>
                                <div className="eng">
                                    <h4 className="college">College -- {(props.part2.collegeName != '') ? props.part2.collegeName : "KLETechnological University, Hubballi, Karnataka"}</h4>
                                    <h4>Branch --{(props.part1.branch !== '') ? props.part1.branch : "Branch Name"}</h4>
                                    <p>CGPA -- {(props.part2.collegeCGPA !== '') ? props.part2.collegeCGPA : "7.00"}</p>
                                    <p>{(props.part2.activeYears !== '') ? props.part2.activeYears : "Aug2018-Aug2022"}</p>
                                </div>
                                <div className="class12">
                                    <h4>Class 12th</h4>
                                    <h4 className="college">School - -{(props.part2.class12thCollegeName != '') ? props.part2.class12thCollegeName : "Class 12th college name"}</h4>
                                    <p>Class 12th percentage -- {(props.part2.class12thPercentage !== '') ? props.part2.class12thPercentage : "62.5%"}</p>
                                    <p>PassOutYear --{(props.part2.class12thPassOut !== '') ? props.part2.class12thPassOut : "2018"} </p>
                                </div>
                                <div className="class10">
                                    <h4>Class 10th</h4>
                                    <h4>School - - {(props.part2.class10thCollegeName !== '') ? props.part2.class10thCollegeName : "10th school name"}</h4>
                                    <p>Class 12th percentage  -- {(props.part2.class10thPercentage !== '') ? props.part2.class10thPercentage : "82.5%"} </p>
                                    <p>PassOutYear --{(props.part2.class10thPassOut !== '') ? props.part2.class10thPassOut : "2016"} </p>
                                </div>
                            </div>
                            <div className="skills">
                                <h2 className=" heading">Skills</h2>
                                <h4>Programing Skills</h4>
                                <p>{(props.part3.programingSkills !== '') ? props.part3.programingSkills : "C, C++(Object Oriented Language),Basics of Data Structures, Assembly Language(8051, ARM) ,Scripting Language(HTML,CSS)"}
                                </p>
                                <h4>Tools</h4>
                                <p>{(props.part3.tools !== '') ? props.part3.tools : "Keil, Cadence, Proteus, Wordpress,Basics of MATLAB"}</p>
                                <h4>Soft Skills</h4>
                                <p>{(props.part3.softSkills !== '') ? props.part3.softSkills : "Good Organizer, Leadership,Adaptability, Problem Solving, Quick Learner, Good Listener"} </p>
                            </div>
                        </div>
                        <div className="userDetails4">
                            <div className="projects">
                                <h2 className="heading">Projects</h2>
                                <div className="project">
                                    <h3>{(props.part4.project1Title !== '') ? props.part4.project1Title : "Title of Project"}</h3>
                                    <p>Team Size -- {(props.part4.project1Team !== '') ? props.part4.project1Team : "4"}</p>
                                    <p>{(props.part4.project1Desc !== '') ? props.part4.project1Desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, incidunt dolore. Qui eaque delectus aperiam commodi harum rem doloremque atque numquam iure earum veniam ratione voluptates, deleniti nesciunt, laboriosam consectetur."}</p>
                                </div>
                                <div className="project">
                                    <h3>{(props.part4.project2Title !== '') ? props.part4.project2Title : "Title of Project"}</h3>
                                    <p>Team Size -- {(props.part4.project2Team !== '') ? props.part4.project2Team : "4"}</p>
                                    <p>{(props.part4.project2Desc !== '') ? props.part4.project2Desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, incidunt dolore. Qui eaque delectus aperiam commodi harum rem doloremque atque numquam iure earum veniam ratione voluptates, deleniti nesciunt, laboriosam consectetur."}</p>
                                </div>
                                <div className="project">
                                    <h3>{(props.part4.project3Title !== '') ? props.part4.project3Title : "Title of Project"}</h3>
                                    <p>Team Size -- {(props.part4.project3Team !== '') ? props.part4.project3Team : "4"}</p>
                                    <p>{(props.part4.project3Desc !== '') ? props.part4.project3Desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, incidunt dolore. Qui eaque delectus aperiam commodi harum rem doloremque atque numquam iure earum veniam ratione voluptates, deleniti nesciunt, laboriosam consectetur."}</p>
                                </div>
                            </div>
                            <div className="userDetails5">
                                <h2 className="heading">Interests</h2>
                                <p>{(props.part5.intrests !== '') ? props.part5.intrests : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate optio in eius sequi. Minus, sint!"}</p>
                                <div className="languages">
                                    <h2 className="heading">Languages</h2>
                                    <p>{(props.part5.languages !== '') ? props.part5.languages : "Kannada,English,Hindi"}</p>
                                </div>
                                <div style={{ 'display': (props.skipC) ? 'none' : 'block' }} className="certifications">
                                    <h2 className="heading">Certifications</h2>
                                    {((props.part6.cer2 !== '' || props.part6.cer3 !== '') && props.part6.cer1 == '') ? '' : (props.part6.cer1 !== '') ? <p>{props.part6.cer1}</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.</p>}
                                    {((props.part6.cer1 !== '' || props.part6.cer3 !== '') && props.part6.cer2 == '') ? '' : (props.part6.cer2 !== '') ? <p>{props.part6.cer2}</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.</p>}
                                    {((props.part6.cer1 !== '' || props.part6.cer2 !== '') && props.part6.cer3 == '') ? '' : (props.part6.cer3 !== '') ? <p>{props.part6.cer3}</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.</p>}
                                </div>
                            </div>
                        </div>
                        <div className="userDetails6">
                            <div style={{ 'display': (props.skipA) ? 'none' : 'block' }} className="achivements">
                                <h2 className="heading">Achievements</h2>
                                <ul>
                                    {((props.part7.ach2 !== '' || props.part7.ach3 !== '') && props.part7.ach1 == '') ? '' : (props.part7.ach1 !== '') ? <li>{props.part7.ach1}</li> : <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.</li>}
                                    {((props.part7.ach1 !== '' || props.part7.ach3 !== '') && props.part7.ach2 == '') ? '' : (props.part7.ach2 !== '') ? <li>{props.part7.ach2}</li> : <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.</li>}
                                    {((props.part7.ach1 !== '' || props.part7.ach2 !== '') && props.part7.ach3 == '') ? '' : (props.part7.ach3 !== '') ? <li>{props.part7.ach3}</li> : <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <ReactToPrint
                        trigger={() => <button className="print">Download</button>}
                        content={() => componentRef.current}
                    />
                    <button className="print" onClick={() => props.editMode(true)} >Edit!</button>
                </div>
            </div>
        </>
    )
}
