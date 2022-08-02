import React from 'react'
import CallForPaperBox from './CallForPaperBox'
import SectionHeading from './SectionHeading'

function CallForPaper() {
    return (
        <div className="introductionArea" id="Introduction">
            <div className="flex-box-section">
                
                <SectionHeading title="IGNITE '22 CALL FOR PAPERS"/>

                <CallForPaperBox 
                    description="Do you have a compelling story, use-case or in-depth technical product knowledge to share?
                    "
                />
                <br />
                <CallForPaperBox
                    description="Ignite ‘22 Call for Papers is now open!"
                />

            </div>
        </div>
    )
}

export default CallForPaper