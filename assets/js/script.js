const workSection = $(".work");

const renderWorks = () => {
    workSection.append(`
    <div class="workcardwrapper-lg">
        <button class="workcards workcards-large" onclick="window.open('${workData[0].appLink}')" style="background-image: url('${workData[0].imgLink}');">
            <div class="workcard-description">
                <h4>${workData[0].title}</h4>
                <p>${workData[0].tech}</p>
                
            </div>
        </button>
        <div class="worksummarywrapper">
            <p class="workcards-links">
                <a class="workcards-links" href="${workData[0].repoLink}" target="_blank"> GitHub Repo</a>
            </p>
            <p>${workData[0].summary}</p>
        </div>
    </div>
    `);
    
    for (i = 1; i < workData.length; i++) {
        workSection.append(`
        <div class="workcardwrapper">
            <button class="workcards" onclick="window.open('${workData[i].appLink}')" style="background-image: url('${workData[i].imgLink}');">
                <div class="workcard-description">
                    <h4>${workData[i].title}</h4>
                    <p>${workData[i].tech}</p>
                </div>
            </button>
            <div class="worksummarywrapper">
                <p class="workcards-links">
                    <a class="workcards-links" href="${workData[i].repoLink}" target="_blank"> GitHub Repo</a>
                </p>
                <p>${workData[i].summary}</p>
            </div>
        </div>
        `)
    }
}

renderWorks();