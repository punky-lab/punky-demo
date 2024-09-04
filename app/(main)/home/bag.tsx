import TraitsDisplay from "@/app/components/traitsDisplay"
export default function Bag() {
    return (
        <div>
            <span>Bag</span>
            <span>TraitsList</span>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
                <TraitsDisplay />
            </div>
        </div>
    )
}