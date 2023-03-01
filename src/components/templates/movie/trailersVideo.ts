const trailerVideo = (url: string): string => {
    const newUrl = url.replace('/watch?v=', '/embed/');
    const result = `
    <div class="trailers__video_item">
        <iframe class="trailers__video_item_video" width="386" height="217" src=${newUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="trailers__video_item_text">
        <a href=${newUrl} class="trailers__video_item_title" data-tid="23a2a59">Трейлер</a>
        </div>
    </div>`;
    return result;
};

export default trailerVideo;
