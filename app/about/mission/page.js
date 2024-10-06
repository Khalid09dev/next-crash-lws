import Button from "@/app/components/Button";
import Image from "next/image";
import thumb from '@/public/next-thumb.png'

export default function Mission() {
    console.log("Mission Page");
    return (
        <div>
            Mission Page
            <Image src={thumb} alt="Thumb Image" placeholder="blur"/>
            <Button/>
        </div>
    )
}