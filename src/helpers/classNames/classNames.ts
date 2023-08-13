type Mods = Record<string, boolean | string>

export function classNames(cls:string, mods:Mods, additional:string[]):string {
    const classNamesFromMods = Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)

    return [
        cls,
        ...additional,
        ...classNamesFromMods
    ].join(' ')
}

// classNames('remove-btn', {hovered:true, selected:true, red:false}, ['pdg'])
// получится
// 'remove-btn hovered selected pdg'
