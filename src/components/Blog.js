import React, { useState, useEffect } from 'react'
import blogWeeks from '../data/weeks.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faReact, faJsSquare, faBootstrap, faHtml5, faCss3Alt, faPhp, faLaravel, faGit } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons'
import "./Blog.css"


function BlogPosts() {

    const [currentTime, setCurrentTime] = useState(null)

    useEffect(() => {
        setCurrentTime(new Date())
    }, [])


    function splitParas(post) {
        return post.map((item, index) => {
            if (index % 2 === 0) {
                return <h5 key={index}>{item}</h5>
            } else {
                return <p key={index}>{item}</p>
            }
        })
    }

    function splitStack(stack) {
        return stack.map((item) => {
            let icon = ''
            if (item === "React") {
                icon = <FontAwesomeIcon style={{ color: "#61DBFB" }} icon={faReact} />
            }
            else if (item === "JavaScript") {
                icon = <FontAwesomeIcon style={{ color: "#EAD64E" }} icon={faJsSquare} />
            }
            else if (item === "Bootstrap") {
                icon = <FontAwesomeIcon style={{ color: "#543B79" }} icon={faBootstrap} />
            }
            else if (item === "HTML") {
                icon = <FontAwesomeIcon style={{ color: "#E54C21" }} icon={faHtml5} />
            }
            else if (item === "CSS") {
                icon = <FontAwesomeIcon style={{ color: "#264EE4" }} icon={faCss3Alt} />
            }
            else if (item === "GitHub") {
                icon = <FontAwesomeIcon style={{ color: "" }} icon={faGithub} />
            }
            else if (item === "PHP") {
                icon = <FontAwesomeIcon style={{ color: "#8690BA" }} icon={faPhp} />
            }
            else if (item === "Laravel") {
                icon = <FontAwesomeIcon style={{ color: "#E62D1F" }} icon={faLaravel} />
            }
            else if (item === "Firebase") {
                icon = <FontAwesomeIcon icon={faCodeBranch} style={{ color: "#F99504" }} />
            }
            else if (item === "MySQL") {
                icon = <FontAwesomeIcon icon={faDatabase} style={{ color: "#686A71" }} />
            }
            else if (item === "Git") {
                icon = <FontAwesomeIcon style={{ color: "#E74D33" }} icon={faGit} />
            }

            return (
                <div className="col-sm-2 fa-lg mt-2 pl-0 d-inline" >
                    {icon}
                </div>
            )

        })
    }


    const blogPosts = blogWeeks.map((item, index) => {
        const formattedDate = new Date(item.date)
        const difference = Math.floor(((currentTime - formattedDate) / 1000 / 60 / 60 / 24) << 0)

        return (
            <>
                <h2 className="blog-post-title sticky-top bg-white">{item.subtitle}</h2>
                <h6 key={index}>{splitStack(item.stack)}</h6>
                <p className="blog-post-meta">{difference} day{difference === 1 ? "" : 's'} ago</p>
                <div key={index} className="mb-5">
                    {item.link ? <a href="https://foodie-33619.web.app/" target="_blank">Foodie App</a> : null}
                    {splitParas(item.paragraphs)}
                    <hr />
                </div>
            </>
        )
    })

    const archives = ["January 2020", "February 2020", "March 2020", "April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020"]
    const archivePosts = archives.map((item, index) => {
        return (
            <>
                <a href="/blog">{item}</a><br />
            </>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div id="blogpost" className="col-md-8">
                    {blogPosts}
                </div>
                <div className="col-md-4 sticky-top">
                    <h4 className="font-italic">Archives</h4>
                    <ol className="list-unstyled mb-0">
                        {archivePosts}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default BlogPosts

