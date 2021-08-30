const workSection = $(".work");

const renderWorks = () => {
    workSection.append(`
    <button class="workcards workcards-large" onclick="window.location.href='${workData[0].appLink}';" style="background-image: url('${workData[0].imgLink}');">
        <div class="workcard-description">
            <h4>${workData[0].title}</h4>
            <p>${workData[0].tech}</p>
            <p class="workcards-links">
                <a href="${workData[0].repoLink}"> GitHub Repo</a>
            </p>
        </div>
    </button>
    `);
    
    for (i = 1; i < workData.length; i++) {
        workSection.append(`
        <button class="workcards" onclick="window.location.href='${workData[i].appLink}';" style="background-image: url('${workData[i].imgLink}');">
            <div class="workcard-description">
                <h4>${workData[i].title}</h4>
                <p>${workData[i].tech}</p>
                <p class="workcards-links">
                    <a href="${workData[i].repoLink}">GitHub Repo</a>
                </p>
            </div>
        </button>
        `)
    }
}

renderWorks();