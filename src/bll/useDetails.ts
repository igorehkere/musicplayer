import { useState, useEffect } from "react";
import { getTrack } from "../dal/api";

type TrackDetailsResource = {
    id: string,
    attributes: TrackDetailsAttributes,
}

type TrackDetailsAttributes = {
    title: string,
    lyrics: string | null,
    images: {
        main: Array<{
            url: string,
        }>
    }
    likesCount: number,
}

export function useDetails (selectedTrackId: string | null) {
    const [track, setTrack] = useState<TrackDetailsResource | null>(null);
    useEffect(() => {
        if (!selectedTrackId) return
        getTrack(selectedTrackId).then(js => setTrack(js.data))
    }, [selectedTrackId])

    return {track}
}