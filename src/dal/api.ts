export function getTracks() {
    const promise = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'cf0ddaf7-318e-4876-b6f5-44884cf22e49',
            },
    }).then(res => res.json())
    return promise;

}