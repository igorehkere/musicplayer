import { useState, useEffect } from "react";
import { getTracks } from "../dal/api";

type TrackListItemResource = {
    id: string,
    attributes: TrackListItemAttributes,
}
type TrackListItemAttributes = {
    title: string,
    attachments: Array<{
        url: string,
    }>,
    images: TrackImages
}

type TrackImages = {
    main: Array<{
        url: string,
    }>
}

export function useTracks (numPage: number) {
    const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
    
    
    
    useEffect(() => {
        setTracks(null);
        getTracks(numPage).then(js => setTracks(js.data))
    }, [numPage]);

    return { tracks, selectedTrackId, setSelectedTrackId}
}