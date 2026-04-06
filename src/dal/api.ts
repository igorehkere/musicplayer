const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) return undefined
    return {
        'api-key': apiKey,
    }
}

export function getTracks(numPage: number) {
    const promise = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=${numPage}`, {
            headers: prepareHeaders(),
    }).then(res => res.json())
    return promise;

}

export function getTrack (id: string) {
    const promise = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${id}`, {
            headers: prepareHeaders(),
    }).then(res => res.json())
    return promise;    
}